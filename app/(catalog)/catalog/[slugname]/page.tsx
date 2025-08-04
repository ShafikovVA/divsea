import NftCardDetail from '@/components/business/NftCardDetail/NftCardDetail';
import './nft-page.scss';
import React from 'react';
import ProductDetailTitle from '@/components/business/NftCardDetail/Title/ProductDetailTitle';
import {
  getCardData,
  getCardsFromCreatorData,
} from '@/app/(catalog)/catalog/[slugname]/page.server';
import { INftCard } from '@/types/nfts/INftCard';
import FromCreator from '@/components/blocks/NftPage/FromCreator/FromCreator';
import NftBidStoryChart from '@/components/business/NftBidStoryChart/NftBidStoryChart';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slugname: string }>;
}) {
  const slug = (await params).slugname;

  const productData: INftCard = await getCardData(slug);

  return {
    title: `${productData.title} - ${process.env.PRODUCT_NAME}`,
    description: productData.description,
  };
}

export default async function NftPage({
  params,
}: {
  params: Promise<{ slugname: string }>;
}) {
  const { slugname } = await params;
  const productData: INftCard = await getCardData(slugname);
  const fromCreatorData: INftCard[] = await getCardsFromCreatorData();

  return (
    <>
      <section className={'nft-page'}>
        <div className="container">
          <ProductDetailTitle />
          <NftCardDetail {...productData} />
          <div className="nft-page__bid">
            <NftBidStoryChart />
            <div className="nft-page__bidFormContainer">
              {/*<HistoryOfBidForm data={...productData.historyOfBid} min />*/}
            </div>
          </div>
        </div>
      </section>
      <FromCreator nfts={fromCreatorData} />
    </>
  );
}

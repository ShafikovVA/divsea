'use server';
import ProductDetail from '@/components/blocks/ProductDetail/ProductDetail';
import './nft-page.scss';
import React from 'react';
import ProductDetailTitle from '@/components/blocks/ProductDetail/Title/ProductDetailTitle';
import { getCardData } from '@/app/(catalog)/catalog/[slugname]/page.server';
import { INftCard } from '@/types/nfts/INftCard';

export default async function NftPage({
  params,
}: {
  params: { slugname: string };
}) {
  const { slugname } = await params;
  const productData: INftCard = await getCardData(slugname);

  return (
    <section className={'nft-page'}>
      <div className="container">
        <ProductDetailTitle />
        <ProductDetail {...productData} />
      </div>
    </section>
  );
}

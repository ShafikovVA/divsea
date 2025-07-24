import ProductDetail from '@/components/blocks/ProductDetail/ProductDetail';
import './nft-page.scss';
import React from 'react';
import ProductDetailTitle from '@/components/blocks/ProductDetail/Title/ProductDetailTitle';

export default async function NftPage({
  params,
}: {
  params: { slugname: string };
}) {
  const { slugname } = await params;

  return (
    <section className={'nft-page'}>
      <div className="container">
        <ProductDetailTitle />
        {/* <h1>{slugname}</h1> */}
        <ProductDetail />
      </div>
    </section>
  );
}

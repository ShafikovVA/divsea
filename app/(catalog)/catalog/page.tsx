import './catalog.scss';
import { CardList } from '@/components/blocks/Catalog/CatalogCardList/CardList';
import CardFilters from '@/components/blocks/Catalog/CardFilters/CardFilters';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Discover NFTs - ${process.env.PRODUCT_NAME}`,
  description:
    'Discover NFTs on DivSea — explore a wide range of unique digital assets, browse exclusive collections, and find your next favorite NFT. Enjoy seamless search, advanced filters, and a secure marketplace for buying and selling NFTs.',
};

export default async function Catalog() {
  return (
    <section className={'catalog'}>
      <div className="container">
        <h1>Discover NFTs</h1>
        <CardFilters />
        <CardList />
      </div>
    </section>
  );
}

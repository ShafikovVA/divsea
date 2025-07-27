import './catalog.scss';
import { CardList } from '@/components/blocks/Catalog/CatalogCardList/CardList';
import CardFilters from '@/components/blocks/Catalog/CardFilters/CardFilters';

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

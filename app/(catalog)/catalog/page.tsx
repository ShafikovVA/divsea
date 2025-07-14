import './catalog.scss';
import { getCards } from './page.server';
import { CardList } from '@/components/blocks/Catalog/CatalogCardList/CardList';
import CardFilters from "@/components/blocks/Catalog/CardFilters/CardFilters";

export default async function Catalog() {
  const data = await getCards();
  
  return (
    <section className={'catalog'}>
      <div className="container">
        <h1>Discover NFTs</h1>
        <CardFilters />
        <CardList inititalData={data} />
      </div>
    </section>
  );
}

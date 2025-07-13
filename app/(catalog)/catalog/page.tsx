import './catalog.scss';
import { getCards } from './page.server';
import Button from '@/components/ui/Button/Button';
import ProductCard from '@/components/business/ProductCard/ProductCard';
import { useCatalog } from '@/lib/hooks/catalog/useCatalog';

import { IProductCard } from '@/app/type/product/IProductCard';
import { CardList } from '@/components/blocks/Catalog/CatalogCardList/CardList';

export default async function Catalog() {
  const cards: IProductCard[] = await getCards();

  return (
    <section className={'catalog'}>
      <div className="container">
        <h1>Discover NFTs</h1>
        <div className={'catalog__filters'}>
          <Button className={'button-outline'}>Category</Button>
          <Button className={'button-outline'}>Collection</Button>
          <Button className={'button-outline'}>Price</Button>
        </div>
        <CardList cards={cards} />
      </div>
    </section>
  );
}

'use client'
import { IProductCard } from "@/app/type/product/IProductCard";
import ProductCard from "@/components/business/ProductCard/ProductCard";
import Pagination from "@/components/ui/Pagination/Pagination";

interface ICardListProps {
    cards: IProductCard[];
}

export const CardList = ({ cards }: ICardListProps) => {
    return (
        <>
            <div className="catalog__cardList">
                <div className="catalog__cardList-cards">
                    {cards.map((card) => (
                        <ProductCard key={card.id} {...card} />
                    ))}
                </div>
                <Pagination pages={10} currentPage={1} setCurrentPage={() => { } } />
            </div>
        </>
    )
}
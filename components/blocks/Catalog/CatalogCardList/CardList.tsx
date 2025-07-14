'use client'
import { getCards } from "@/app/(catalog)/catalog/page.server";
import { IProductCard } from "@/app/type/product/IProductCard";
import ProductCard from "@/components/business/ProductCard/ProductCard";
import Pagination from "@/components/ui/Pagination/Pagination";
import { useState } from "react";

interface ICardListProps {
    cards: IProductCard[];
    pages: number;
}

export const CardList = ({ cards, pages }: ICardListProps) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [cardItems, setCardItems] = useState(cards);

    const onPageChange = async (page: number) => {
        const {data: cards} = await getCards(page);
        setCardItems(cards);
        setCurrentPage(page);
        window.scrollTo(0, 0);
    }
    return (
        <>
            <div className="catalog__cardList">
                <div className="catalog__cardList-cards">
                    {cardItems.map((card) => (
                        <ProductCard key={card.id} {...card} />
                    ))}
                </div>
                {pages > 1 && (
                    <Pagination pages={ pages } currentPage={currentPage} setCurrentPage={onPageChange} />
                )}
            </div>
        </>
    )
}
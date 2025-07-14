import { IProductCard } from "@/app/type/product/IProductCard"

export interface IGetCardsResponse {
    first: number,
    prev: number,
    next: number,
    last: number,
    pages: number,
    items: number,
    data: IProductCard[];
}
export const getCards = async (page: number = 1): Promise<IGetCardsResponse> => {
    console.log(page);
    try {
        const res = await fetch(`http://localhost:3001/cards?_page=${page}`, {
            method: 'GET',
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
        return {
            first: 0,
            prev: 0,
            next: 0,
            last: 0,
            pages: 0,
            items: 0,
            data: [],
        }
    }
}

import { IProductCard } from "@/app/type/product/IProductCard"

export const getCards = async () => {
    
    try {
        const res = await fetch('http://localhost:3001/cards', {
            method: 'GET',
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

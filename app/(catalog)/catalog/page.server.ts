'use server';
import { INfts } from '@/app/type/nfts/INfts';

export const getCards = async (page: number = 1): Promise<INfts> => {
  try {
    const res = await fetch(`http://localhost:3001/cards?_page=${page}`, {
      method: 'GET',
    });
    const data: INfts = await res.json();
    return data as INfts;
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
    } as INfts;
  }
};

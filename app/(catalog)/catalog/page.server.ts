'use server';
import { INfts } from '@/types/nfts/INfts';

export const getCards = async (page: number = 1): Promise<INfts> => {
  try {
    const res = await fetch(`http://localhost:3001/cards?_page=${page}`, {
      method: 'GET',
    });
    const data: INfts = await res.json();
    return data as INfts;
  } catch (e) {
    console.error(e);
    return {
      first: 1,
      prev: 1,
      next: 1,
      last: 1,
      pages: 1,
      items: 0,
      data: [],
      pending: true,
    };
  }
};

'use server';

import { INftCard } from '@/types/nfts/INftCard';

export const getNfts = async (): Promise<INftCard[]> => {
  try {
    const response = await fetch(`${process.env.BASE_URL}/cards?_limit=15`);
    const data: INftCard[] = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [] as INftCard[];
  }
};

export const getExploreMarketplace = async (): Promise<INftCard[]> => {
  try {
    const response = await fetch(`${process.env.BASE_URL}/cards?_limit=8`);
    const data: INftCard[] = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [] as INftCard[];
  }
};

'use server';

import { notFound } from 'next/navigation';

export const getCardData = async (slugname: string) => {
  const cardData = await fetch(
    `${process.env.BASE_URL}/cards?slug=${slugname}`,
    {
      method: 'GET',
    },
  );
  if (!cardData.ok) {
    if (cardData.status === 404) {
      return notFound();
    }
    throw new Error('Failed to fetch data');
  }
  const cardDataJson = await cardData.json();
  if (cardDataJson.length === 0) {
    return notFound();
  }
  return cardDataJson[0];
};

import { useEffect, useState } from 'react';

export const useCatalog = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getCatalogData = async () => {
      const newCards = await fetch('/api/catalog');
      setCards(await newCards.json());
    };

    getCatalogData();
  }, []);

  return { cards };
};

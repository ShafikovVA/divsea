import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import NftCard from './NftCard';
 
const meta = {
  title: 'Business/NftCard',
  component: NftCard,
} satisfies Meta<typeof NftCard>;
 
export default meta;
type Story = StoryObj<typeof meta>;
 
export const Default: Story = {
  args: {
    title: 'Sun-Glass',
    price: 1.75,
    image: 'https://via.assets.so/game.png?id=2&q=95&w=360&h=360&fit=fill',
    id: 1,
    historyOfBid: [],
  },
};
export const Big: Story = {
  args: {
    title: 'Sun-Glass',
    price: 1.75,
    image: 'https://via.assets.so/game.png?id=2&q=95&w=360&h=360&fit=fill',
    id: 1,
    historyOfBid: [],
    big: true,
  },
};
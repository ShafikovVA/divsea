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
    image: 'https://via.placeholder.com/150',
    id: 1,
    historyOfBid: [],
  },
};
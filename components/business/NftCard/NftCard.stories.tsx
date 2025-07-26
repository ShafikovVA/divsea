import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Provider } from 'react-redux';
import { makeStore } from '@/store';
import NftCard from './NftCard';

const meta: Meta<typeof NftCard> = {
  title: 'Business/NftCard',
  component: NftCard,
  decorators: [
    (Story) => (
      <Provider store={makeStore()}>
        <Story />
      </Provider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Sun-Glass',
    price: 1.75,
    image: null,
    id: 1,
    historyOfBid: [],
  },
};
export const Big: Story = {
  args: {
    title: 'Sun-Glass',
    price: 1.75,
    image: null,
    id: 1,
    historyOfBid: [],
    big: true,
  },
};

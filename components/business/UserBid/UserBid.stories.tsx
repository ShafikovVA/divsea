import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import UserBid from './UserBid';

const meta = {
  title: 'Business/UserBid',
  component: UserBid,
} satisfies Meta<typeof UserBid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    userName: 'Repo',
    date: 'May 17, 2022 at 12:08',
    price: 1.23,
    image: 'https://via.assets.so/game.png?id=2&q=95&w=360&h=360&fit=fill',
    id: 1,
    style: {
      maxWidth: '450px',
    },
  },
};

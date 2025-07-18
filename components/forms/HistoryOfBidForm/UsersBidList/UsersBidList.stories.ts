import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import UsersBidList from './UsersBidList';
const meta = {
  title: 'Lists/UsersBidList',
  component: UsersBidList,
} satisfies Meta<typeof UsersBidList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    usersBidList: [
      {
        id: 1,
        userName: 'John Doe',
        date: '2021-01-01',
        price: 100,
        image: 'https://via.assets.so/game.png?id=2&q=95&w=360&h=360&fit=fill',
      },
      {
        id: 2,
        userName: 'John Doe',
        date: '2021-01-01',
        price: 100,
        image: 'https://via.assets.so/game.png?id=2&q=95&w=360&h=360&fit=fill',
      },
      {
        id: 3,
        userName: 'John Doe',
        date: '2021-01-01',
        price: 100,
        image: 'https://via.assets.so/game.png?id=2&q=95&w=360&h=360&fit=fill',
      },
      {
        id: 4,
        userName: 'John Doe',
        date: '2021-01-01',
        price: 100,
        image: 'https://via.assets.so/game.png?id=2&q=95&w=360&h=360&fit=fill',
      },
    ],
  },
};

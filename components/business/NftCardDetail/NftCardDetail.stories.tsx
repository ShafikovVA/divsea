import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Provider } from 'react-redux';
import { makeStore } from '@/store';
import NftCardDetail from './NftCardDetail';

const meta: Meta<typeof NftCardDetail> = {
  title: 'Business/NftCardDetail',
  component: NftCardDetail,
  decorators: [
    (Story) => (
      <Provider store={makeStore()}>
        <div className="container">
          <Story />
        </div>
      </Provider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 1,
    title: 'Shadow Dance #1',
    slug: 'shadow-dance-1',
    description:
      'A legendary sword said to be able to cut through darkness itself. Its blade never dulls.',
    price: 578,
    category: 'Game',
    image: null,
    historyOfBid: [
      {
        userName: 'Frank',
        date: '2023-04-16',
        price: 613,
        image: null,
      },
      {
        userName: 'Olivia',
        date: '2023-03-15',
        price: 674,
        image: null,
      },
    ],
  },
};

export const Fullfiled: Story = {
  args: {
    id: 1,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. ',
    slug: 'shadow-dance-1',
    description:
      '\n' +
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae magna vel dolor varius egestas. Pellentesque in arcu euismod libero aliquet vestibulum. Sed non arcu sagittis, finibus tellus vel, ultrices neque. Donec mattis urna eget dui lacinia consectetur. In metus nulla, feugiat eget volutpat ut, lobortis luctus lorem. Duis sit amet neque egestas, pulvinar odio et, faucibus dolor. Morbi pretium vestibulum leo, nec condimentum risus sollicitudin ornare. Aliquam eget velit varius purus sagittis sollicitudin et at mi.',
    price: 578,
    category: 'Game',
    image: null,
    historyOfBid: [
      {
        userName: 'Frank',
        date: '2023-04-16',
        price: 613,
        image: null,
      },
      {
        userName: 'Olivia',
        date: '2023-03-15',
        price: 674,
        image: null,
      },
    ],
  },
};

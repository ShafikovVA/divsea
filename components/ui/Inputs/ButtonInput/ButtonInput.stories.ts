import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ButtonInput from './ButtonInput';
const meta = {
  title: 'UI/ButtonInput',
  component: ButtonInput,
} satisfies Meta<typeof ButtonInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your email',
    style: {
      maxWidth: '400px',
    },
  },
};

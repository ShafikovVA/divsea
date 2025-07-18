import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Input from './Input';
const meta = {
  title: 'UI/Input',
  component: Input,
} satisfies Meta<typeof Input>;

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

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

export const InputWithValue: Story = {
  args: {
    placeholder: 'Enter your email',
    value: 'test@test.com',
    style: {
      maxWidth: '400px',
    },
  },
};

export const InputButtonPrimary: Story = {
  args: {
    placeholder: 'Enter your email',
    value: 'test@test.com',
    button: 'primary',
    style: {
      maxWidth: 'fit-content',
    },
  },
};

export const InputButtonOutline: Story = {
  args: {
    placeholder: 'Enter your email',
    value: 'test@test.com',
    button: 'outline',
    style: {
      maxWidth: 'fit-content',
    },
  },
};

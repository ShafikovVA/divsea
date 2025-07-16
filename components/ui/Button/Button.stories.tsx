import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Button from './Button';
 
const meta = {
  title: 'UI/Button',
  component: Button,
} satisfies Meta<typeof Button>;
 
export default meta;
type Story = StoryObj<typeof meta>;
 
export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
};
export const Primary: Story = {
  args: {
    children: 'Primary',
    primary: true,
  },
};
export const Outline: Story = {
  args: {
    children: 'Outline',
    outline: true,
  },
};
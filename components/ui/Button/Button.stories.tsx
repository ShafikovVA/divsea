import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Button from './Button';
import Image from 'next/image';

import CloseIcon from '@/assets/icons/cross.svg?url';
import BurgerIcon from '@/assets/icons/burger.svg?url';
 
const meta = {
  title: 'UI/Button',
  component: Button,
} satisfies Meta<typeof Button>;
 
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default',
  },
};
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
export const PrimaryDisabled: Story = {
  args: {
    children: 'Primary',
    primary: true,
    disabled: true,
  },
};
export const OutlineDisabled: Story = {
  args: {
    children: 'Outline',
    outline: true,
    disabled: true,
  },
};
export const Uppercase: Story = {
  args: {
    children: 'Primary',
    primary: true,
    uppercase: true,
  },
};
export const Burger: Story = {
  args: {
    children: <Image src={BurgerIcon} alt="burger" />,
    className: 'burger',
  },
};
export const Close: Story = {
  args: {
    children: <Image src={CloseIcon} alt="close" />,
    className: 'close',
  },
};
export const ButtonTag: Story = {
  args: {
    children: 'Button Tag',
    tag: true,
  },
};
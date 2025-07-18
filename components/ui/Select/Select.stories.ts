import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Select from './Select';
const meta = {
  title: 'UI/Select',
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
    styles: {
      container: (base) => ({
        ...base,
        maxWidth: '400px',
      }),
    },
  },
};

export const Primary: Story = {
  args: {
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
    styles: {
      container: (base) => ({
        ...base,
        maxWidth: '400px',
      }),
    },
    primary: true,
  },
};

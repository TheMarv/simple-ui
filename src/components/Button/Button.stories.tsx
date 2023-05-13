import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const _Button: Story = {
  args: {
    color: 'Primary',
    size: 'M',
  },
  render: args => <Button {...args}>Button</Button>,
};

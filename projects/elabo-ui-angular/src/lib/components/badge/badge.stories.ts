import { Meta, StoryObj } from '@storybook/angular';
import { BadgeComponent } from './badge.component';

const meta: Meta<BadgeComponent> = {
  title: 'Components/Badge',
  component: BadgeComponent,
  argTypes: {
    textColor: {
      control: 'color',
    },
    class: {
      control: 'text',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info'],
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<BadgeComponent>;

export const Default: Story = {
  args: {
    textColor: 'black',
  },
  render: (args: any) => ({
    component: BadgeComponent,
    props: args,
    template: `<eui-badge [class]="classes" [variant]="variant">
      <span>${args.variant || 'Default'} badge </span>
    </eui-badge>`,
  }),
};

export const Primary: Story = {
  ...Default,
  args: {
    ...Default.args,
    variant: 'primary',
  },
};

export const Secondary: Story = {
  ...Default,
  args: {
    ...Default.args,
    variant: 'secondary',
  },
};

export const Success: Story = {
  ...Default,
  args: {
    ...Default.args,
    variant: 'success',
  },
};

export const Danger: Story = {
  ...Default,
  args: {
    ...Default.args,
    variant: 'danger',
  },
};

export const Warning: Story = {
  ...Default,
  args: {
    ...Default.args,
    variant: 'warning',
  },
};

export const Info: Story = {
  ...Default,
  args: {
    ...Default.args,
    variant: 'info',
  },
};

export const CustomClass: Story = {
  args: {
    ...Default.args,
    classes: 'text-blue-500',
    variant: 'primary',
  },

  render: (args: any) => ({
    component: BadgeComponent,
    props: args,
    template: `<eui-badge [class]="'bg-pink-800 text-white text-md w-40 font-medium rounded-full'" [variant]="variant">
      <span>use with tailwind classes</span>
    </eui-badge>`,
  }),
};

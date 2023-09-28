import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";

const meta = {
  title: 'UI/labels/MyLabel',
  component: MyLabel, 
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes:{
    size: { control: 'inline-radio' },
    color: { control: 'select' },
    fontColor: { control: 'color' }
  }
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args:{
    label: 'Basic Label',
    size: 'normal'
  }
};

export const AllCaps: Story = {
  args:{
    label: 'AllCaps Label',
    size: 'normal',
    allCaps: true,
  }
};

export const Secondary: Story = {
  args:{
    label: 'Secondary Label',
    size: 'h2',
    color: 'text-tertiary'
  }
};

export const CustomColor: Story = {
  args:{
    label: 'Custom Color Label',
    size: 'normal',
    fontColor: '#A8C69F'
  }
};

export const CustomBackground: Story = {
  args:{
    label: 'Custom Color Label',
    size: 'normal',
    fontColor: '#FFF',
    backgroundColor: '#A8C69F'
  }
};
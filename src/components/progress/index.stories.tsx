import type { Meta, StoryObj } from "@storybook/react-vite";

import { IndeterminateLinearProgress } from "./indeterminate-linear-progress";
import { LinearProgress } from "./linear-progress";
import { Page } from "./story";

const meta: Meta<typeof Page> = {
  component: Page,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Page>;

export const Default: Story = {
  args: {
    size: 48,
  },
  argTypes: {
    size: {
      type: "number",
      control: {
        type: "number",
      },
    },
  },
};

export const Linear: StoryObj<typeof LinearProgress> = {
  render: (args) => (
    <div>
      <LinearProgress {...args} />
    </div>
  ),
  args: {
    height: 48,
    value: 24,
  },
};

export const LinearWithPercentage: StoryObj<typeof LinearProgress> = {
  render: (args) => (
    <div>
      <LinearProgress {...args} showPercentage />
    </div>
  ),
  args: {
    height: 48,
    value: 24,
  },
};

export const IntederminateLinear: StoryObj<typeof IndeterminateLinearProgress> = {
  render: (args) => (
    <div>
      <IndeterminateLinearProgress {...args} />
    </div>
  ),
  args: {
    height: 48,
    width: 24,
  },
};

export default meta;

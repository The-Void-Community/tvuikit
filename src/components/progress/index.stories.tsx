import type { Meta, StoryObj } from "@storybook/react-vite";

import { IndeterminateLinearProgress } from "./indeterminate-linear-progress";
import { LinearProgress } from "./linear-progress";
import { Page } from "./story";
import { EllipsisProgress } from "./ellipsis-progress";
import { Wrapper } from "../wrapper";

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

export const IntederminateLinear: StoryObj<typeof IndeterminateLinearProgress> =
  {
    render: (args) => (
      <div>
        <IndeterminateLinearProgress {...args} />
      </div>
    ),
    args: {
      height: 48,
    },
  };

export const Ellipsis: StoryObj<typeof EllipsisProgress> = {
  render: () => (
    <Wrapper flexDirection="col">
      <div className="bg-(--fg-default) flex gap-16 w-fit py-8 px-12 rounded-lg">
        <EllipsisProgress type="pulse" />
        <EllipsisProgress type="pulse" elements={6} />
        <EllipsisProgress type="wave" />
        <EllipsisProgress type="wave" elements={6} />
        <EllipsisProgress type="run" />
        <EllipsisProgress type="run" elements={6} />
        <EllipsisProgress type="orbit" />
        <EllipsisProgress type="orbit" elements={6} />
      </div>
    </Wrapper>
  ),
};

export default meta;

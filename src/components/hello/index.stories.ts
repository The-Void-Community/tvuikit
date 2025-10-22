import type { Meta, StoryObj } from "@storybook/react";
import { Hello } from ".";

const meta: Meta<typeof Hello> = {
  component: Hello,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Hello>;

export const Default: Story = {
  args: {
    size: "default",
  },
};

import type { Meta, StoryObj } from "@storybook/react-vite";

import { Page } from "./story";

const meta: Meta<typeof Page> = {
  component: Page,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Page>;

export const Default: Story = {
  args: {
    size: 24,
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

export default meta;

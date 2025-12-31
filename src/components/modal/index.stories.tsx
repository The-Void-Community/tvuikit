import type { Meta, StoryObj } from "@storybook/react-vite";

import { Page } from "./story";

const meta: Meta<typeof Page> = {
  component: Page,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Page>;

export const Default: Story = {
  args: {
    zIndex: 0,
  },
  argTypes: {
    zIndex: {
      type: "number",
      control: {
        type: "number"
      }
    }
  }
};

export default meta;

import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
};

export const Default: StoryObj<typeof Button> = {
  args: {
    text: "I'm button",
    type: "default"
  },
};

export default meta;

import type { Meta, StoryObj } from "@storybook/react-vite";

import { Page } from "./story";

const meta: Meta<typeof Page> = {
  component: Page,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Page>;

export const Default: Story = {
  args: {
    imageVar: "--image-bg",
    height: "100px",
    width: "300px",
  },
};

export default meta;

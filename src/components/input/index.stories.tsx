import type { Meta, StoryObj } from "@storybook/react-vite";

import { Page } from "./story";

const meta: Meta<typeof Page> = {
  component: Page,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Page>;

export const Default: Story = {};

export default meta;

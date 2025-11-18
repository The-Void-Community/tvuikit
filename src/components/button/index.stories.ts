import type { Meta, StoryObj } from "@storybook/react-vite";

import { Page } from "./story";
import { button } from "../../variables/colors/button";

const meta: Meta<typeof Page> = {
  component: Page,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Page>;

const defaultArgumentTypes: Story["argTypes"] = {
  buttonChildren: {
    type: "string",
  },

  buttonType: {
    type: "string",
    options: Object.keys(button),

    control: {
      type: "select",
    },
  },
};

export const Default: Story = {
  args: {
    buttonChildren: "I'm button",
    buttonType: "default",
  },
  argTypes: defaultArgumentTypes,
};

export const Primary: Story = {
  args: {
    buttonChildren: "I'm button",
    buttonType: "primary",
  },
  argTypes: defaultArgumentTypes,
};

export const Danger: Story = {
  args: {
    buttonChildren: "I'm button",
    buttonType: "danger",
  },
  argTypes: defaultArgumentTypes,
};

export const Secondary: Story = {
  args: {
    buttonChildren: "I'm button",
    buttonType: "secondary",
  },
  argTypes: defaultArgumentTypes,
};

export const Tetriary: Story = {
  args: {
    buttonChildren: "I'm button",
    buttonType: "tetriary",
  },
  argTypes: defaultArgumentTypes,
};

export default meta;

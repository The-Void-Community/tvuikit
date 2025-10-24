import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from ".";
import { button } from "../../variables/colors/button";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
};

const defaultArgumentTypes: StoryObj<typeof Button>["argTypes"] = {
  children: {
    type: "string"
  },

  type: {
    type: "string",
    options: Object.keys(button),
  
    control: {
      type: "select"
    }
  }
};

export const Default: StoryObj<typeof Button> = {
  args: {
    children: "I'm button",
    type: "default"
  },
  argTypes: defaultArgumentTypes
};

export const Primary: StoryObj<typeof Button> = {
  args: {
    children: "I'm button",
    type: "primary"
  },
  argTypes: defaultArgumentTypes
};

export const Danger: StoryObj<typeof Button> = {
  args: {
    children: "I'm button",
    type: "danger"
  },
  argTypes: defaultArgumentTypes
};

export const Secondary: StoryObj<typeof Button> = {
  args: {
    children: "I'm button",
    type: "secondary"
  },
  argTypes: defaultArgumentTypes
};

export const Tetriary: StoryObj<typeof Button> = {
  args: {
    children: "I'm button",
    type: "tetriary"
  },
  argTypes: defaultArgumentTypes
};

export default meta;

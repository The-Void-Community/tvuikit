import type { Meta, StoryObj } from "@storybook/react-vite";

import { Notifications } from "./notifications.component";
import { Notification } from "./notification.component";
import { Wrapper } from "../wrapper";

const meta: Meta<typeof Notification> = {
  component: Notification,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Notification>;

export const Default: Story = {
  args: {
    text: "Hello",
    disablePositionAndInset: true,
    closed: false,
  },
  render: (args) => (
    <Wrapper>
      <Notification {...args} />
    </Wrapper>
  ),
};

export const NotificationsTest: StoryObj<typeof Notifications> = {
  render: Notifications,
};

export default meta;

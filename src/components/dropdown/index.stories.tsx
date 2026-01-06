import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from ".";

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  tags: ["autodocs"],
  argTypes: {
    closeOnClickOutside: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  render: (args) => (
    <div className="p-8">
      <Dropdown {...args}>
        <DropdownTrigger>Open Dropdown</DropdownTrigger>
        <DropdownMenu>
          <DropdownItem onClick={() => console.log("Profile clicked")}>
            Profile
          </DropdownItem>
          <DropdownItem>
            Settings
          </DropdownItem>
          <DropdownItem variant="danger">
            Logout
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  ),
};

export const WithCustomTrigger: Story = {
  render: () => (
    <div className="p-8">
      <Dropdown>
        <DropdownTrigger>
          B
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem>Notification 1</DropdownItem>
          <DropdownItem>Notification 2</DropdownItem>
          <DropdownItem>Notification 3</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  ),
};

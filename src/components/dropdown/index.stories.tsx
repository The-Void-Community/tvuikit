import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '.';
import { UserCircle, Settings, LogOut, Bell } from 'lucide-react';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    closeOnClickOutside: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  render: (args) => (
    <div className="p-8">
      <Dropdown {...args}>
        <DropdownTrigger>
          Open Dropdown
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem onClick={() => console.log('Profile clicked')}>
            <UserCircle className="inline mr-2 w-4 h-4" />
            Profile
          </DropdownItem>
          <DropdownItem>
            <Settings className="inline mr-2 w-4 h-4" />
            Settings
          </DropdownItem>
          <DropdownItem variant="danger">
            <LogOut className="inline mr-2 w-4 h-4" />
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
          <Bell className="w-5 h-5" />
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

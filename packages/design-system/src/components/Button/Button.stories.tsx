import Button from "./Button";
import { fn } from "@storybook/test";
import { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    size: {
      options: ["small", "medium", "massive"],
    },
    color: {
      options: ["primary", "error"],
    },
    children: {
      control: {
        labels: {
          text: "Button",
        },
      },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    color: "primary",
    children: "Primary",
  },
};

export const Error: Story = {
  args: {
    color: "error",
    children: "Error",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: "Small",
  },
};
export const Medium: Story = {
  args: {
    size: "medium",
    children: "Medium",
  },
};

export const Massive: Story = {
  args: {
    size: "massive",
    children: "Massive",
  },
};

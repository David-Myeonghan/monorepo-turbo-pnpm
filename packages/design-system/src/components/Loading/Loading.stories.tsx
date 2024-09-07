import { Loading } from "@/components";

const meta = {
  title: "Loading",
  component: Loading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      description: "Loading Circle Size",
      options: ["small", "medium"],
    },
  },
};

export default meta;

export const Small = {
  args: {
    size: "small",
  },
};

export const Medium = {
  args: {
    size: "medium",
  },
};

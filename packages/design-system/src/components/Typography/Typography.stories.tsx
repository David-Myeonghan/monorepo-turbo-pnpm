import { Typography } from "@/components";

const meta = {
  title: "Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      description: "",
      options: ["t1", "t2", "t3"],
    },
  },
};

export default meta;

export const T1 = {
  args: {
    size: "t1",
    children: "T1 typography",
  },
};

export const T2 = {
  args: {
    size: "t2",
    children: "T2 typography",
  },
};

export const T3 = {
  args: {
    size: "t3",
    children: "T3 typography",
  },
};

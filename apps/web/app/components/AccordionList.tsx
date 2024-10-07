"use client";

import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./AccordionList.module.css";
import humanizeString from "humanize-string";

const cx = classNames.bind(styles);

type SinglePost = {
  id: number;
  title: string;
  body: string;
  tags: Array<string>;
};

interface Props {
  postList: Array<SinglePost>;
}

export default function AccordionList({ postList }: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const accordionActive = (index: number) =>
    selectedIndex === index ? "open" : "close";

  const handleAccordionClick = (index: number) => {
    setSelectedIndex(index);
  };

  return postList?.map((item, index) => (
    <div
      key={item.id}
      className={cx("accordion")}
      onClick={(e) => handleAccordionClick(index)}
    >
      <div className={cx("box")}>
        <span className={cx("category")}>
          {humanizeString(item.tags[0] as string)}
        </span>
        <span className={cx("title")}>{item.title}</span>
      </div>
      <div className={cx(accordionActive(index))}>
        <span className={cx("description")}>{item.body}</span>
      </div>
    </div>
  ));
}

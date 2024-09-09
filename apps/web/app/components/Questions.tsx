"use client";

import styles from "./Questions.module.css";
import classNames from "classnames/bind";
import { Typography } from "@repo/design-system/components";
import { useState } from "react";

const cx = classNames.bind(styles);

export default function Questions() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const accordionActive = selectedIndex === 1 ? "open" : "close";

  const handleAccordionClick = (index: number) => {
    if (selectedIndex === null) {
      setSelectedIndex(index);
    } else {
      setSelectedIndex(null);
    }
  };
  return (
    <div className={cx("container")}>
      <div className={cx("question")}>
        <Typography size="t1">자주 묻는 질문</Typography>
      </div>

      {/*  section */}
      <div>
        <div
          className={cx("accordion")}
          onClick={(e) => handleAccordionClick(1)}
        >
          <div className={cx("box")}>
            <span className={cx("category")}>저작권</span>
            <span className={cx("title")}>
              모두에게 무료라면 저작권이 없나요?
            </span>
          </div>
          <div className={cx(accordionActive)}>
            <span className={cx("description")}>
              아니요, 토스페이스의 저작권은 토스 팀에게 있어요. 정확한 사용
              조건은 토스페이스 저작권 안내를 참고해주세요.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

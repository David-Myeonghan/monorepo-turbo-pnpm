"use client";

import React, { useState } from "react";
import { Typography } from "@repo/design-system/components";
import styles from "./Try.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Try() {
  const [value, setValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={cx("try-interaction")}>
      <div>
        <Typography size={"t1"}>지금 써볼까요?</Typography>
        <Typography size={"t4"}>
          Control + Command + Space bar를 눌러 이모지를 입력해보세요
        </Typography>
      </div>

      <input
        className={cx("try-interaction-input")}
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
}

import styles from "./Questions.module.css";
import classNames from "classnames/bind";
import { Loading, Typography } from "@repo/design-system/components";
import AccordionList from "./AccordionList";
import { Suspense } from "react";

const cx = classNames.bind(styles);

export default async function Questions() {
  const data = await fetch("https://dummyjson.com/posts?limit=5");
  const response = await data.json();

  return (
    <div className={cx("container")}>
      <div className={cx("question")}>
        <Typography size="t1">자주 묻는 질문</Typography>
      </div>

      {/*  section */}
      <Suspense fallback={<Loading size="medium" />}>
        <AccordionList postList={response.posts} />
      </Suspense>
    </div>
  );
}

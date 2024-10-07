import { Button } from "@repo/design-system/components";
import classNames from "classnames/bind";
import styles from "./Header.module.css";
const cx = classNames.bind(styles);

export default function Header() {
  return (
    <header className={cx("header")}>
      <div>
        <span>Toss</span>
      </div>
      <div className={cx("header-buttons")}>
        <a href={"https://toss.im/"} target="_blank">
          <Button size={"small"}>3D로 체험하기</Button>
        </a>
        <a href={"https://toss.im/"} target="_blank">
          <Button size={"small"}>나만의 이모지 만들기</Button>
        </a>
        <a href={"https://toss.im/"} target="_blank">
          <Button size={"small"}>전체보기</Button>
        </a>
        <a href={"https://toss.im/"} target="_blank">
          <Button size={"small"}>저작권 안내</Button>
        </a>
        <a href={"https://toss.im/"} target="_blank">
          <Button size={"small"}>다운로드</Button>
        </a>
      </div>
    </header>
  );
}

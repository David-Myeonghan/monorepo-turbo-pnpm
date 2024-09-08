import Image from "next/image";
import styles from "./page.module.css";
import classNames from "classnames/bind";
import { Typography } from "@repo/design-system/components";
import Header from "./components/Header";
import HeroImage from "./components/HeroImage";
import Try from "./components/Try";

const cx = classNames.bind(styles);

export default function Home() {
  return (
    <div className={cx("container")}>
      <Header />
      <HeroImage />
      <Try />
    </div>
  );
}

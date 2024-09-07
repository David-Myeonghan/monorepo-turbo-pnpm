import Image from "next/image";
import styles from "./page.module.css";
import classNames from "classnames/bind";
import { Typography } from "@repo/design-system/components";
import Header from "./components/Header";

const cx = classNames.bind(styles);

export default function Home() {
  return (
    <div className={cx("container")}>
      <Header />
      <div className={cx("hero-image")}>
        <video
          style={{ width: "100%" }}
          poster="https://common-fe.toss.im/resources/adaptive?light=https%3A%2F%2Fcore-cdn-fe.toss.im%2Fvideo%2Fframe%2F%3Fsource%3Dhttps%3A%2F%2Fstatic.toss.im%2F3d%2Ftossface-intro.mp4%26t%3D00%3A00%3A00.000&amp;dark=https%3A%2F%2Fcore-cdn-fe.toss.im%2Fvideo%2Fframe%2F%3Fsource%3Dhttps%3A%2F%2Fstatic.toss.im%2F3d%2Ftossface-intro.mp4%26t%3D00%3A00%3A00.000&amp;lowlight=https%3A%2F%2Fcore-cdn-fe.toss.im%2Fvideo%2Fframe%2F%3Fsource%3Dhttps%3A%2F%2Fstatic.toss.im%2F3d%2Ftossface-intro.mp4%26t%3D00%3A00%3A00.000&amp;lowdark=https%3A%2F%2Fcore-cdn-fe.toss.im%2Fvideo%2Fframe%2F%3Fsource%3Dhttps%3A%2F%2Fstatic.toss.im%2F3d%2Ftossface-intro.mp4%26t%3D00%3A00%3A00.000"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://static.toss.im/3d/tossface-intro.mp4"
            type="video/mp4"
          />
        </video>

        <div className={cx("hero-text")}>
          <Typography size={"t3"}>함께 만들어가는,</Typography>
          <Typography size={"t4"}>토스페이스.</Typography>
        </div>
      </div>
    </div>
  );
}

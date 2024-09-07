import { ChangeEvent, useState } from "react";
import classNames from "classnames/bind";

import styles from "./Header.module.scss";
import Button from "../Button/Button";

const cx = classNames.bind(styles);

interface HeaderProps {
  logo: string;
  onClick: () => void;
}

const Header = ({ logo, onClick }: HeaderProps) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return (
    <div className={cx("container")}>
      <header className={cx("header")}>
        <div className={cx("logo")}>
          <img src={logo} alt="logo" />
        </div>

        {/*<RecentView />*/}

        <div className={cx("right-section")}>
          <div className={cx("search-box")}>
            <input
              className={cx("search-input")}
              value={searchValue}
              onChange={handleSearchFieldChange}
            />
            <Button color={"primary"} onClick={onClick}>
              Search
            </Button>
          </div>
        </div>
      </header>
      <div className={cx("content-wrapper")}>{/*<Outlet />*/}</div>
    </div>
  );
};

export default Header;

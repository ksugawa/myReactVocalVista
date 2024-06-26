import React from "react";
import dashboardIcon from "../images/icon-dashboard.svg";
import vocabbookIcon from "../images/icon-vocabbook.svg";

export const AsideBar = () => {
  return (
    <div className="asideBar">
      <div className="avatarIcon"></div>
      <nav>
        <button className="navmenuBtn">
            <img src={dashboardIcon} alt="ダッシュボードアイコン" />
        </button>
        <button className="navmenuBtn">
            <img src={vocabbookIcon} alt="単語帳アイコン" />
        </button>
      </nav>
    </div>
  );
};

export default AsideBar;

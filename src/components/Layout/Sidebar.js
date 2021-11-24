import React from "react";
import LogoImage from "assets/images/logo.svg";
import BoardIcon from "assets/images/board.svg";
import ChartIcon from "assets/images/chart.svg";
import ChatIcon from "assets/images/chat.svg";
import SettingIcon from "assets/images/setting.svg";
import DoubleArrowRightIcon from "assets/images/double_arrow_right.svg";
import styles from "assets/scss/sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.root}>
      <img src={LogoImage} alt=":( Not Found" />
      <div>
        <img src={BoardIcon} alt=":( Not Found" />
        <img src={ChartIcon} alt=":( Not Found" />
        <img src={ChatIcon} alt=":( Not Found" />
        <img src={SettingIcon} alt=":( Not Found" />
      </div>
      <img src={DoubleArrowRightIcon} alt=":( Not Found" />
    </div>
  );
};

export default Sidebar;

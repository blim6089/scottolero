import React, { useState } from "react";
import CourseGroup from "./Group";
import ArrowDownIcon from "assets/images/arrow_down.svg";
import Avatar from "assets/images/avatars/1.png";
import styles from "assets/scss/course/panel.module.scss";

const CoursePanel = (props) => {
  const tabs = [
    {
      id: "all",
      name: "All Courses",
    },
    {
      id: "current",
      name: "Current",
    },
    {
      id: "archieved",
      name: "Archieved",
    },
    {
      id: "upcoming",
      name: "Upcoming",
    },
  ];
  const [selectedTab, setSelectedTab] = useState(tabs[0].id);

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div>
          <span>My Courses</span>
          <img src={ArrowDownIcon} alt=":( Not Found" />
        </div>
        <div className={styles.avatar}>
          <div>
            <img src={Avatar} alt=":( Not Found" />
          </div>
          <span></span>
        </div>
      </div>
      <span className={styles.view_all}>View all courses</span>
      <div className={styles.tabs}>
        {tabs.map((tab, index) => {
          return (
            <div
              className={tab.id === selectedTab ? styles.active_tab : ""}
              onClick={() => setSelectedTab(tab.id)}
              key={index}
            >
              {tab.name}
            </div>
          );
        })}
      </div>
      <div>
        {props.courses.map((group, index) => {
          return <CourseGroup {...group} key={index} />;
        })}
      </div>
    </div>
  );
};

export default CoursePanel;

import React from "react";
import CourseTicket from "./Ticket";
import styles from "assets/scss/course/group.module.scss";

const CourseGroup = (props) => {
  return (
    <div className={styles.root}>
      <p className={styles.name}>{props.name}</p>
      {props.items.map((item, index) => {
        return <CourseTicket {...item} key={index} />;
      })}
    </div>
  );
};

export default CourseGroup;

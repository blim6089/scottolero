import React from "react";
import MoreIcon from "assets/images/more.svg";
import styles from "assets/scss/course/ticket.module.scss";

const CourseTicket = (props) => {
  return (
    <div className={styles.root}>
      <div
        className={styles.icon}
        style={{ background: props.thumbup ? "#0CCB8E" : "#FE840C" }}
      >
        <img src={props.icon} alt=":( Not Found" />
      </div>
      <div className={styles.content}>
        <div>
          <p className={styles.name}>{props.name}</p>
          <div className={styles.rate}>
            {props.thumbup ? "🔥" : "👎"} {props.rate}
          </div>
        </div>
        <p className={styles.date}>{props.date}</p>
        <img src={MoreIcon} alt=":( Not Found" className={styles.more} />
      </div>
    </div>
  );
};

export default CourseTicket;

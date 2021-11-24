import React from "react";
import styles from "assets/scss/folder/ticket.module.scss";
import ClockIcon from "assets/images/clock.svg";
import MoreIcon from "assets/images/more.svg";
import FolderIcon from "assets/images/folder.svg";

const FolderTicket = (props) => {
  return (
    <div className={styles.root} style={{ background: props.background }}>
      <img src={MoreIcon} alt=":( Not Found" className={styles.more} />
      <div className={styles.icon}>
        <img src={props.icon} alt=":( Not Found" />
      </div>
      <p className={styles.name}>{props.name}</p>
      <div className={styles.avatars}>
        {props.users.map((user, index) => {
          return <img src={user} alt=":( Not Found" key={index} />;
        })}
        <div>+{props.more}</div>
      </div>
      <div className={styles.files}>
        <img src={FolderIcon} alt=":( Not Found" />
        <p>{props.count} Files</p>
      </div>
      <div className={styles.date}>
        <img src={ClockIcon} alt=":( Not Found" />
        <p>Created on {props.createdAt}</p>
      </div>
    </div>
  );
};

export default FolderTicket;

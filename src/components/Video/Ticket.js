import React from "react";
import styles from "assets/scss/video/ticket.module.scss";
import InfoIcon from "assets/images/info.svg";
import MoreIcon from "assets/images/more.svg";
import PlusIcon from "assets/images/plus.svg";
import DotIcon from "assets/images/dot.svg";

const VideoTicket = (props) => {
  return (
    <div className={styles.root}>
      <img src={MoreIcon} alt=":( Not Found" className={styles.more} />
      <div className={styles.avatar}>
        <img src={props.avatar} alt=":( Not Found" />
      </div>
      <div className={styles.content}>
        <p className={styles.name}>{props.name}</p>
        <div class={styles.txt}>
          <img src={InfoIcon} alt=":( Not Found" />
          <span>{props.rate} ratings</span>
          <img src={DotIcon} alt=":( Not Found" />
          <span>{props.reviews} Reviews</span>
        </div>
        <div className={styles.avatars}>
          {props.users.map((user, index) => {
            return <img src={user} alt=":( Not Found" key={index} />;
          })}
          <div>
            <img src={PlusIcon} alt=":( Not Found" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTicket;

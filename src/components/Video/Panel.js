import React from "react";
import Ticket from "./Ticket";
import SearchIcon from "assets/images/search.svg";
import BellIcon from "assets/images/bell.svg";
import ArrowDownIcon from "assets/images/arrow_down.svg";
import Video from "assets/mov_bbb.mp4";
import styles from "assets/scss/video/panel.module.scss";

const VideoPanel = (props) => {
  return (
    <div className={styles.root}>
      <div className={styles.toolbar}>
        <span>June 06, 2021, Tuesday</span>
        <button className={styles.search_button}>
          <img src={SearchIcon} alt=":( Not Found" />
        </button>
        <div className={styles.bell_button}>
          <button>
            <img src={BellIcon} alt=":( Not Found" />
          </button>
          <span>2</span>
        </div>
      </div>
      <div className={styles.video}>
        <video src={Video} controls></video>
      </div>
      <div className={styles.panel}>
        <div className={styles.header}>
          <div>
            <span>My Videos</span>
            <img src={ArrowDownIcon} alt=":( Not Found" />
          </div>
          <span>View all videos</span>
        </div>
        <div>
          {props.videos.map((video, index) => {
            return <Ticket {...video} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoPanel;

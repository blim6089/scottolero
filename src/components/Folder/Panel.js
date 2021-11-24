import React from "react";
import Ticket from "./Ticket";
import styles from "assets/scss/folder/panel.module.scss";
import PlusIcon from "assets/images/plus.svg";
import CloudIcon from "assets/images/cloud.svg";
import ArrowDownIcon from "assets/images/arrow_down.svg";

const FolderPanel = (props) => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div>
          <span>Folders</span>
          <img src={ArrowDownIcon} alt=":( Not Found" />
        </div>
        <div>
          <div className={styles.cloud_button}>
            <button>
              <img src={CloudIcon} alt=":( Not Found" />
            </button>
            <span></span>
          </div>
          <button className={styles.plus_button}>
            <img src={PlusIcon} alt=":( Not Found" />
          </button>
        </div>
      </div>
      <div>
        {props.folders.map((folder, index) => {
          return <Ticket key={index} {...folder} />;
        })}
      </div>
    </div>
  );
};

export default FolderPanel;

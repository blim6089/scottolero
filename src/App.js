import React from "react";
import Sidebar from "components/Layout/Sidebar";
import CoursePanel from "components/Course/Panel";
import FolderPanel from "components/Folder/Panel";
import VideoPanel from "components/Video/Panel";
import styles from "assets/scss/app.module.scss";

import Emoti1 from "assets/images/emoti/1.svg";
import Emoti2 from "assets/images/emoti/2.svg";
import Emoti3 from "assets/images/emoti/3.svg";
import Emoti4 from "assets/images/emoti/4.svg";
import Emoti5 from "assets/images/emoti/5.svg";
import Emoti6 from "assets/images/emoti/6.svg";

import BrushIcon from "assets/images/brush.svg";
import HeartIcon from "assets/images/heart.svg";

import Avatar2 from "assets/images/avatars/2.png";
import Avatar3 from "assets/images/avatars/3.png";
import Avatar4 from "assets/images/avatars/4.png";
import Avatar5 from "assets/images/avatars/5.png";
import Avatar6 from "assets/images/avatars/6.png";
import Avatar7 from "assets/images/avatars/7.png";
import Avatar8 from "assets/images/avatars/8.png";

import LGAvatar1 from "assets/images/avatars/lg/1.png";
import LGAvatar2 from "assets/images/avatars/lg/2.png";
import LGAvatar3 from "assets/images/avatars/lg/3.png";
import LGAvatar4 from "assets/images/avatars/lg/4.png";
import LGAvatar5 from "assets/images/avatars/lg/5.png";

const App = () => {
  const courses = [
    {
      name: "Design",
      items: [
        {
          name: "UX Design",
          date: "Tuesday, June 06, 2021",
          rate: 9.2,
          thumbup: true,
          icon: Emoti1,
        },
        {
          name: "Website Design",
          date: "Tuesday, June 06, 2021",
          rate: 8.9,
          thumbup: true,
          icon: Emoti2,
        },
        {
          name: "Service Design",
          date: "Tuesday, June 06, 2021",
          rate: 5.3,
          thumbup: false,
          icon: Emoti3,
        },
      ],
    },
    {
      name: "Other courses",
      items: [
        {
          name: "Principles of com...",
          date: "Tuesday, June 06, 2021",
          rate: 9.9,
          thumbup: true,
          icon: Emoti4,
        },
        {
          name: "Machine Learning",
          date: "Tuesday, June 06, 2021",
          rate: 4.8,
          thumbup: false,
          icon: Emoti5,
        },
        {
          name: "Photo Editing",
          date: "Tuesday, June 06, 2021",
          rate: 8.9,
          thumbup: true,
          icon: Emoti6,
        },
      ],
    },
  ];

  const folders = [
    {
      name: "Design Shift",
      count: 2,
      createdAt: "Nov 06, 2021",
      icon: BrushIcon,
      users: [Avatar2, Avatar3],
      more: 4,
      background: "linear-gradient(180deg, #E55644 0%, #B62816 100%)",
    },
    {
      name: "Health Care App",
      count: 24,
      createdAt: "Sep 06, 2021",
      icon: HeartIcon,
      users: [Avatar4, Avatar5, Avatar6],
      more: 2,
      background: "linear-gradient(180deg, #7077E2 0%, #7B83F9 100%)",
    },
    {
      name: "Food Truck Website",
      count: 10,
      createdAt: "June 06, 2021",
      icon: BrushIcon,
      users: [Avatar7, Avatar2],
      more: 4,
      background: "linear-gradient(180deg, #F4B954 0%, #DE8A08 100%)",
    },
    {
      name: "Health Care App",
      count: 8,
      createdAt: "June 06, 2021",
      icon: HeartIcon,
      users: [Avatar3, Avatar2, Avatar8],
      more: 2,
      background: "linear-gradient(180deg, #26CA95 0%, #03AE76 100%)",
    },
  ];

  const videos = [
    {
      name: "Human - Cenrered Design",
      rate: 663,
      reviews: 72,
      users: [Avatar4, Avatar5, Avatar6],
      avatar: LGAvatar1,
    },
    {
      name: "Input and Interactio",
      rate: 526,
      reviews: 92,
      users: [Avatar7, Avatar2],
      avatar: LGAvatar2,
    },
    {
      name: "E - Learning and Digital Cultures",
      rate: 1167,
      reviews: 156,
      users: [Avatar4, Avatar5, Avatar8],
      avatar: LGAvatar3,
    },
    {
      name: "Eng - vocabulary Test",
      rate: 758,
      reviews: 103,
      users: [Avatar8, Avatar3],
      avatar: LGAvatar4,
    },
    {
      name: "Social Communication",
      rate: 663,
      reviews: 72,
      users: [Avatar4, Avatar5, Avatar6],
      avatar: LGAvatar5,
    },
  ];

  return (
    <div className={styles.root}>
      <Sidebar />
      <div className={styles.content}>
        <div className={styles.left_panel}>
          <div className={styles.course_panel}>
            <CoursePanel courses={courses} />
          </div>
          <div className={styles.folder_panel}>
            <FolderPanel folders={folders} />
          </div>
        </div>
        <div className={styles.right_panel}>
          <VideoPanel videos={videos} />
        </div>
      </div>
    </div>
  );
};

export default App;

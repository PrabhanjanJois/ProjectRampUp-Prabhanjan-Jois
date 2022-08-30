import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/Home.module.css";
import avatar from "../images/pic1.png";
import pic2 from "../images/pic2.png";
import {
  faUser,
  faChevronDown,
  faClipboardList,
  faUserGroup,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Image from "next/image";
import DropDown from "./dropdown";
import Link from "next/link";

const Sidebar = () => {
  const [collapse, setCollapse] = useState(true);

  return (
    <div>
      {" "}
      <div className={`${collapse ? styles.collapse : ""} ${styles.wrapper}`}>
        <div className={styles.minusHeader}>
          {/* <!--sidebar start--> */}
          <div className={styles.sidebar}>
            <div className={styles.sidebarMenu}>
              {/* <div className={styles.profileInfo}>
            <div className={styles.profileImage}>
              <Image
                src={avatar}
                height={50}
                width={50}
                alt=""
                onClick={() => {
                  setCollapse((prevState) => !prevState);
                }}
              />
            </div>
            <h4>Health</h4>
          </div> */}
              <li className={styles.item} id="admin">
                <a href="#" className={styles.menuBtn}>
                  <Image
                    src={pic2}
                    height={50}
                    width={35}
                    alt=""
                    // onClick={() => {
                    //   setCollapse((prevState) => !prevState);
                    // }}
                    // className={styles.imageStyle}
                  />
                  {/* <span className={styles.oneSpan}>HEALTH</span> */}
                </a>
                <span className={styles.oneSpan}>HEALTH</span>
              </li>
              <li className={styles.item} id="admin">
                {/* <Link href="/adminusers"> */}
                <a href="/adminusers" className={styles.menuBtn}>
                  <FontAwesomeIcon
                    className={styles.icon}
                    icon={faUser}
                    size={"xs"}
                  />
                  <span>Admin_Users</span>
                </a>
                {/* </Link> */}
              </li>
              <li className={styles.item} id="projects">
                <a href="/projects" className={styles.menuBtn}>
                  <FontAwesomeIcon
                    className={styles.icon}
                    icon={faClipboardList}
                    size={"xs"}
                  />
                  <span>Projects</span>
                </a>
              </li>
              <li className={styles.item} id="emp">
                <a href="/employee" className={styles.menuBtn}>
                  <FontAwesomeIcon
                    className={styles.icon}
                    icon={faUserGroup}
                    size={"xs"}
                  />
                  <span>Employee</span>
                </a>
              </li>

              <li
                className={styles.item}
                id="settings"
                onClick={() => {
                  setCollapse(false);
                }}
              >
                <DropDown
                  head={
                    <div className={styles.menuBtn}>
                      <FontAwesomeIcon
                        className={styles.icon}
                        icon={faGear}
                        size={"xs"}
                      />
                      <span>
                        {" "}
                        <span> </span>Settings
                      </span>{" "}
                      <FontAwesomeIcon
                        className={`${styles.icon} ${styles.dropDown}`}
                        icon={faChevronDown}
                      />
                    </div>
                  }
                >
                  <div className={styles.subMenu}>
                    <a href="/settingsSkills">
                      {/* <FontAwesomeIcon className={styles.icon} icon={faLock} /> */}
                      <span>Skills</span>
                    </a>
                    <a href="/settingProj">
                      {/* <FontAwesomeIcon
                    className={styles.icon}
                    icon={faLanguage}
                  /> */}
                      <span>Project type</span>
                    </a>
                    <a href="/settingEmp">
                      {/* <FontAwesomeIcon
                    className={styles.icon}
                    icon={faLanguage}
                  /> */}
                      <span>Employee type</span>
                    </a>
                  </div>
                </DropDown>
              </li>
            </div>
          </div>
          {/* <!--sidebar end--> */}
        </div>
      </div>
      <div className={styles.imageLatest}>
        <Image
          src={avatar}
          height={38}
          width={38}
          alt=""
          onClick={() => {
            setCollapse((prevState) => !prevState);
          }}
        />
      </div>
      {/* <div className={styles.imageLatest}>HEALTH</div> */}
    </div>
  );
};

export default Sidebar;

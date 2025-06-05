import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faBarsProgress } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/NavInside.module.css";

const NavInside = () => {
  return (
    <>
      <div className={styles.outerDiv}>
        <div className={styles.left}>
          <FontAwesomeIcon className={styles.fourDot} icon={faBarsProgress} />
          <FontAwesomeIcon className={styles.taskFlowIcon} icon={faList} />
        </div>
        <div className={styles.center}>
          <div className={styles.searchAndInput}>
            <FontAwesomeIcon
              className={styles.searchIcon}
              icon={faMagnifyingGlass}
            />
            <input
              className={styles.inputBox}
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div className={styles.right}>
          <button className={styles.createButton}>Create</button>
          <FontAwesomeIcon className={styles.megaphoneIcon} icon={faBullhorn} />
          <FontAwesomeIcon className={styles.notificationIcon} icon={faBell} />
          <FontAwesomeIcon className={styles.helpIcon} icon={faCircleInfo} />
          <button className={styles.account}>Account</button>
        </div>
      </div>
    </>
  );
};

export default NavInside;

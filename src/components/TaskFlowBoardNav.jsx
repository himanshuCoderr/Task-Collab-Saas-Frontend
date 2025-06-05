import styles from "../styles/TaskFlowBoard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faPlug } from "@fortawesome/free-solid-svg-icons";
import { faWandSparkles } from "@fortawesome/free-solid-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const TaskFlowBoardNav = () => {
  return (
    <>
      <div className={styles.outer}>
        <div className={styles.left}>
          <h1 className={styles.heading}>My Trello board</h1>
          <FontAwesomeIcon className={styles.eyeIcon} icon={faEye} />
        </div>
        <div className={styles.right}>
          <button className={styles.rightShift}>Account</button>
          <FontAwesomeIcon
            className={`${styles.rightShift} ${styles.icon}`}
            icon={faPlug}
          />
          <FontAwesomeIcon
            className={`${styles.rightShift} ${styles.icon}`}
            icon={faWandSparkles}
          />
          <FontAwesomeIcon
            className={`${styles.rightShift} ${styles.icon}`}
            icon={faFilter}
          />
          <FontAwesomeIcon
            className={`${styles.rightShift} ${styles.icon}`}
            icon={faStar}
          />
          <FontAwesomeIcon
            className={`${styles.rightShift} ${styles.icon}`}
            icon={faUsers}
          />
          <button className={`${styles.rightShift} ${styles.icon} ${styles.button}`}>
            <span>
              <FontAwesomeIcon
                className={`${styles.butIcon} ${styles.icon}`}
                icon={faUserPlus}
              />
            </span>
            <span className={styles.share}>Share</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default TaskFlowBoardNav;

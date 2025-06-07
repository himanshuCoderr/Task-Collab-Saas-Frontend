import styles from "../styles/TaskFlowBoardDisplay.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const TaskFlowBoardDisplay = () => {
  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.container2}>
          <div className={styles.divInside}>
            <div>
              <h1>Today</h1>
            </div>
            <FontAwesomeIcon icon={faArrowRight} />
            <FontAwesomeIcon icon={faEllipsis} />
          </div>
          <div className="styles.card">
            <button>+ Add a card </button>
          </div>
        </div>
        <div className={styles.container3}>
          <div className={styles.divInside}>
            <div>
              <h1>This Week</h1>
            </div>
            <FontAwesomeIcon icon={faArrowRight} />
            <FontAwesomeIcon icon={faEllipsis} />
          </div>
          <div className="styles.card">
            <button>+ Add a card </button>
          </div>
        </div>
        <div className={styles.container4}>
          <div className={styles.divInside}>
            <div>
              <h1>Later</h1>
            </div>
            <FontAwesomeIcon icon={faArrowRight} />
            <FontAwesomeIcon icon={faEllipsis} />
          </div>
          <div className="styles.card">
            <button>+ Add a card </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskFlowBoardDisplay;

import styles from "../styles/Inbox.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox, faLock } from "@fortawesome/free-solid-svg-icons";

const Inbox = () => {
  return (
    <div className={styles.left}>
      <div className={styles.inboxName}>
        <FontAwesomeIcon className={styles.inboxIcon} icon={faInbox} />
        <h1 className={styles.inbox}>Inbox</h1>
      </div>

      <div className={styles.content}>
        <img
          src="https://trello.com/assets/6070c9c7eb4f62ab0595.svg"
          alt="Dog"
        />
        <h1 className={styles.captureTitle}>
          Capture everything, wherever you are
        </h1>

        <div className={styles.leftShort}>
          <img
            src="https://trello.com/assets/cea70922c96967ed6505.svg"
            alt=""
          />
          <div className={styles.innerContent}>
            <p className={styles.paragraph}>
              Forward any email to inbox@app.trello.com to add a card.
            </p>
            <button className={styles.button}>
              <a className={styles.anchor} href="">
                Learn how email to inbox works
              </a>
            </button>
          </div>
        </div>

        <div className={styles.leftShort}>
          <img
            src="https://trello.com/assets/f6a68cd2775a3b3228f4.svg"
            alt=""
          />
          <div className={styles.innerContent}>
            <p className={styles.paragraph}>
              Connect Slack to save messages as cards in your Inbox.
            </p>
            <button className={styles.button}>
              <a className={styles.anchor} href="">
                Connect your Slack account
              </a>
            </button>
          </div>
        </div>

        <div className={styles.leftShort}>
          <img
            src="https://trello.com/assets/388652623506bcd19569.svg"
            alt=""
          />
          <div className={styles.innerContent}>
            <p className={styles.paragraph}>
              Connect Teams to save messages as cards in your Inbox.
            </p>
            <button className={styles.button}>
              <a className={styles.anchor} href="">
                Connect your Teams account
              </a>
            </button>
          </div>
        </div>

        <div className={styles.leftShort}>
          <img
            src="https://trello.com/assets/2b5600732417ad5b388d.svg"
            alt=""
          />
          <div className={styles.innerContent}>
            <p className={styles.paragraph}>
              Get the Trello mobile app and capture on-the-go.
            </p>
            <button className={styles.button}>
              <a className={styles.anchor} href="">
                Get the Trello app
              </a>
            </button>
          </div>
        </div>

        <div className={styles.inboxAndPadlock}>
          <FontAwesomeIcon className={styles.padlockImg} icon={faLock} />
          <p className={styles.pTag}>Inbox is only visible to you</p>
        </div>
      </div>

      <div className={styles.cardAddDiv}>
        <button className={styles.cardAddBtn}>Add a card</button>
      </div>
    </div>
  );
};

export default Inbox;

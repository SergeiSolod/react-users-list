import { FC } from "react";
import Button from "../button/Button";
import clsx from "clsx";
import styles from "./Message.module.scss";
import { ReactComponent as AttentionIcon } from "./Attention.svg";
import { ReactComponent as CheckMarkIcon } from "./CheckMark.svg";

interface MessageProps {
  show?: boolean;
  title?: string;
  message?: string;
  isError?: boolean;
  onAccept?: () => void;
  buttonText?: string;
}

const Message: FC<MessageProps> = ({
  show = false,
  title = "",
  message = "",
  isError = false,
  onAccept = () => {},
  buttonText = "ok",
}) => {
  return (
    <div>
    {show && 
      <div className={styles.wrapper}>
        <div
          className={clsx(
            styles.message,
            isError ? styles.error : styles.success,
          )}
        >
          {isError ? <AttentionIcon /> : <CheckMarkIcon />}
          <h1
            className={styles.title}
            style={{ marginBottom: message ? 0 : 28 }}
          >
            {title}
          </h1>
          {message && <p className={styles.title}>{message}</p>}
          <div className={styles.button}>
            <Button id="messageButton" onClick={() => onAccept()}>
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
      }
     </div>
  );
};

export default Message;

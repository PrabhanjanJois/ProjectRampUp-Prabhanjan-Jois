import Link from "next/link";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "../styles/modal.module.css";

const Modal1 = ({ show, onClose, children }: any) => {
  const [isBrowser, setIsBrowser] = useState<boolean>(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleClose = (e: { preventDefault: () => void }): any => {
    e.preventDefault();
    onClose();
  };
  const modalContent = show ? (
    <div className={styles.overlay}>
      <div className={styles.modal3}>
        <div className={styles.header}>
          <Link href={"#"}>
            <a onClick={handleClose}>
              <button className={styles.btn}>X</button>
            </a>
          </Link>
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      //@ts-ignore;
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};
export default Modal1;

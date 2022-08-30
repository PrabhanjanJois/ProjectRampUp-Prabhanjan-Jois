import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/topbar.module.css";
const Topbar = () => {
  return (
    <div>
      <div>
        <FontAwesomeIcon className={styles.bell} icon={faBell} />
        <FontAwesomeIcon className={styles.login} icon={faUserCircle} />
      </div>
    </div>
  );
};

export default Topbar;

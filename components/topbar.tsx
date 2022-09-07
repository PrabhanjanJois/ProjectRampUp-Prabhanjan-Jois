import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/topbar.module.css";
import Popup from "reactjs-popup";
import Cookies from "js-cookie";
import router from "next/router";
const Topbar = () => {
  const logOut = () => {
    Cookies.remove("loggedin");
    router.push("/loginpage");
  };
  return (
    <div>
      <div>
        {/* <FontAwesomeIcon
          className={styles.bell}
          icon={faBell}
          style={{
            fontWeight: "bolder",
            position: "absolute",
            right: "60px",
            top: "8px",
            cursor: "pointer",
          }}
        /> */}

        <Popup
          trigger={
            <span
              style={{
                fontWeight: "bolder",
                position: "absolute",
                right: "10px",
                top: "8px",
                cursor: "pointer",
              }}
            >
              <FontAwesomeIcon className={styles.login} icon={faUserCircle} />
            </span>
          }
          position="bottom right"
          on="hover"
          closeOnDocumentClick
          mouseLeaveDelay={100}
          mouseEnterDelay={100}
          contentStyle={{
            width: "100px",
          }}
          arrow={false}
        >
          <div className={styles.popUp}>
            <a>Profile</a>
          </div>
          <div className={styles.popUp}>Status</div>
          <div
            className={styles.popUp}
            onClick={() => logOut()}
            style={{ cursor: "pointer" }}
          >
            Logout
          </div>
        </Popup>
      </div>
    </div>
  );
};

export default Topbar;

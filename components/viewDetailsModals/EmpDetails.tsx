import React from "react";
import styles from "../../styles/ViewDetails.module.css";

type AdminDetailsProps = {
  openDetails: boolean;
  setOpenDetails: any;
};

const ViewDetailsAdmin = ({
  openDetails,
  setOpenDetails,
}: AdminDetailsProps) => {
  return (
    <div
      style={{
        display: openDetails ? "block" : "none",
        zIndex: 2,
        width: 1440,
        height: "100vh",
        position: "absolute",
      }}
    >
      <div
        style={{
          display: openDetails ? "block" : "none",
        }}
        className={styles.modalBG}
      ></div>
      <div
        style={{ display: openDetails ? "block" : "none" }}
        // className="wholeModalContainer"
      >
        <div
          style={{
            background: "white",
            height: "280px",
            width: "600px",
            left: "300px",
            top: "150px",
            position: "absolute",
            borderRadius: "16px",
          }}
        >
          <h1
            style={{
              // fontFamily: "sans-serif",
              fontSize: "20px",
              paddingLeft: "25px",
              paddingTop: "25px",
            }}
          >
            View Details
          </h1>
          <div
            className={styles.modalClose}
            onClick={() => setOpenDetails(false)}
            style={{ position: "absolute", top: "16px", left: "570px" }}
          ></div>
          <span
            style={{
              // fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "17px",
              textTransform: "uppercase",
              color: "#757575",
              top: "100px",
              left: "25px",
              position: "absolute",
            }}
          >
            USER ID
          </span>
          <span
            style={{
              // fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "14px",
              lineHeight: "17px",
              textTransform: "uppercase",
              color: "#111928",
              top: "125px",
              left: "25px",
              position: "absolute",
            }}
          >
            USER ID
          </span>

          <span
            style={{
              // fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "17px",
              textTransform: "uppercase",
              color: "#757575",
              top: "100px",
              left: "200px",
              position: "absolute",
            }}
          >
            NAME
          </span>
          <span
            style={{
              // fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "14px",
              lineHeight: "17px",
              textTransform: "uppercase",
              color: "#111928",
              top: "125px",
              left: "200px",
              position: "absolute",
            }}
          >
            Your name
          </span>
          <span
            style={{
              // fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "17px",
              textTransform: "uppercase",
              color: "#757575",
              top: "100px",
              left: "375px",
              position: "absolute",
            }}
          >
            EMAIL
          </span>
          <span
            style={{
              // fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "14px",
              lineHeight: "17px",
              textTransform: "uppercase",
              color: "#111928",
              top: "125px",
              left: "375px",
              position: "absolute",
            }}
          >
            USER ID
          </span>
          <span
            style={{
              // fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "17px",
              textTransform: "uppercase",
              color: "#757575",
              top: "200px",
              left: "25px",
              position: "absolute",
            }}
          >
            USER ID
          </span>
          <span
            style={{
              // fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "14px",
              lineHeight: "17px",
              textTransform: "uppercase",
              color: "#111928",
              top: "225px",
              left: "25px",
              position: "absolute",
            }}
          >
            USER ID
          </span>

          <span
            style={{
              // fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "17px",
              textTransform: "uppercase",
              color: "#757575",
              top: "200px",
              left: "200px",
              position: "absolute",
            }}
          >
            NAME
          </span>
          <span
            style={{
              // fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "14px",
              lineHeight: "17px",
              textTransform: "uppercase",
              color: "#111928",
              top: "225px",
              left: "200px",
              position: "absolute",
            }}
          >
            USER ID
          </span>
          <span
            style={{
              // fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "17px",
              textTransform: "uppercase",
              color: "#757575",
              top: "200px",
              left: "375px",
              position: "absolute",
            }}
          >
            EMAIL
          </span>
          <span
            style={{
              // fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "14px",
              lineHeight: "17px",
              textTransform: "uppercase",
              color: "#111928",
              top: "225px",
              left: "375px",
              position: "absolute",
            }}
          >
            USER ID
          </span>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailsAdmin;

/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./ViewDetails.module.css";

type AdminDetailsProps = {
  openDetails: boolean;
  setOpenDetails: any;
  sentData: any;
};

const ViewDetailsAdmin = ({
  openDetails,
  setOpenDetails,
  sentData,
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
            width: "580px",
            left: "300px",
            top: "150px",
            position: "absolute",
            borderRadius: "16px",
          }}
        >
          <h1
            style={{
              fontWeight: "600",
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
            style={{ position: "absolute", top: "16px", left: "540px" }}
          ></div>
          <span
            style={{
              // fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "12px",
              lineHeight: "17px",
              textTransform: "uppercase",
              color: "#757575",
              top: "100px",
              left: "25px",
              position: "absolute",
            }}
          >
            skill name
          </span>
          <span
            style={{
              // fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "12px",
              lineHeight: "17px",
              // textTransform: "uppercase",
              color: "#111928",
              top: "125px",
              left: "25px",
              position: "absolute",
            }}
          >
            {sentData.name}
          </span>

          <span
            style={{
              // fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "12px",
              lineHeight: "17px",
              textTransform: "uppercase",
              color: "#757575",
              top: "100px",
              left: "300px",
              position: "absolute",
            }}
          >
            status
          </span>
          <span
            style={{
              // fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "12px",
              lineHeight: "17px",
              // textTransform: "uppercase",
              color: "#111928",
              top: "125px",
              left: "300px",
              position: "absolute",
            }}
          >
            {sentData.status}
          </span>

          <span
            style={{
              // fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "12px",
              lineHeight: "17px",
              textTransform: "uppercase",
              color: "#757575",
              top: "170px",
              left: "25px",
              position: "absolute",
            }}
          >
            description
          </span>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "12px",
              lineHeight: "17px",
              width: "500px",
              // textTransform: "uppercase",
              color: "#111928",
              top: "195px",
              left: "25px",
              position: "absolute",
            }}
          >
            {sentData.description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailsAdmin;

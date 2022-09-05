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
            height: "330px",
            width: "570px",
            left: "300px",
            top: "150px",
            position: "absolute",
            borderRadius: "16px",
          }}
        >
          <h1
            style={{
              // fontFamily: "sans-serif",
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
              top: "95px",
              left: "25px",
              position: "absolute",
            }}
          >
            project ID
          </span>
          <span
            style={{
              // fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "12px",
              lineHeight: "17px",
              color: "#111928",
              top: "120px",
              left: "25px",
              position: "absolute",
            }}
          >
            012345
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
              top: "95px",
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
              fontSize: "12px",
              lineHeight: "17px",
              color: "#111928",
              top: "120px",
              left: "200px",
              position: "absolute",
            }}
          >
            Jackson
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
              top: "95px",
              left: "375px",
              position: "absolute",
            }}
          >
            client
          </span>
          <span
            style={{
              // fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "12px",
              lineHeight: "17px",
              color: "#111928",
              top: "120px",
              left: "375px",
              position: "absolute",
            }}
          >
            Michael David
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
            project type
          </span>
          <span
            style={{
              // fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "12px",
              lineHeight: "17px",
              color: "#111928",
              top: "195px",
              left: "25px",
              position: "absolute",
            }}
          >
            Lorem ipsum
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
              left: "200px",
              position: "absolute",
            }}
          >
            project responsible
          </span>
          <span
            style={{
              // fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "12px",
              lineHeight: "17px",
              color: "#111928",
              top: "195px",
              left: "200px",
              position: "absolute",
            }}
          >
            Lorem ipsum
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
              left: "375px",
              position: "absolute",
            }}
          >
            start date
          </span>
          <span
            style={{
              // fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "12px",
              lineHeight: "17px",
              color: "#111928",
              top: "195px",
              left: "375px",
              position: "absolute",
            }}
          >
            01 Aug 2022
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
              top: "245px",
              left: "25px",
              position: "absolute",
            }}
          >
            end date
          </span>
          <span
            style={{
              // fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "12px",
              lineHeight: "17px",
              color: "#111928",
              top: "270px",
              left: "25px",
              position: "absolute",
            }}
          >
            24 Sep 2022
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
              top: "245px",
              left: "200px",
              position: "absolute",
            }}
          >
            Project Status
          </span>
          <span
            style={{
              // fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "12px",
              lineHeight: "17px",
              color: " #33BC28",
              top: "270px",
              left: "200px",
              position: "absolute",
            }}
          >
            Running
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
              top: "245px",
              left: "375px",
              position: "absolute",
            }}
          >
            Monthly Status
          </span>
          <span
            style={{
              // fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "12px",
              lineHeight: "17px",
              color: " #E02424",
              top: "270px",
              left: "375px",
              position: "absolute",
            }}
          >
            Behind schedule
          </span>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailsAdmin;

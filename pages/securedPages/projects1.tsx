/* eslint-disable react-hooks/rules-of-hooks */
import React, { SetStateAction, useState, useEffect } from "react";
import TestingSkills from "../../components/projectTable1";
import Sidebar from "../../components/sidebar";
import Topbar from "../../components/topbar";
import styles from "../../styles/pages.module.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Modal from "../../components/modalproj";
import LimitedWordTextarea from "../../components/textAreaInput";
import styles2 from "../../styles/skills.module.css";
import Select from "react-select";

const testing1 = () => {
  const [currenPageNo, setCurrentPageNo] = useState(1);
  const [isopen, setisopen] = useState(false);
  const [records, setRecords] = useState();
  const [showModal, setShowModal] = useState<boolean>(false);
  const no_of_pages = 15;
  const handlePageChange = (e: any) => {
    setCurrentPageNo(e.target.value);
  };

  var axios = require("axios");
  useEffect(() => {
    CallApi();
  }, []);

  const CallApi = async () => {
    var token = localStorage.getItem("token");
    console.log(token, "from itemlist");
    const payload = {
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        Authorization: token,
      },
    };

    try {
      const response = axios.get(
        "https://tranquil-hamlet-54124.herokuapp.com/projects/all",
        payload
      );
      response.then((res: any) => {
        console.log(res.data);
        setRecords(res.data);
      });
    } catch (e: any) {
      console.log(e);
    }
  };

  //
  const [mName, setMname] = useState<string>("");
  const [mDesc, setMdesc] = useState<string>("dss dssd sdsd ds");
  const [mStatus, setStatus] = useState<any>("active");
  const [msg, setMsg] = useState<boolean>(false);
  const handleOptions = (opt: any) => {
    setStatus(opt);
    console.log(mStatus);
  };

  async function handleSubmit1(e: any) {
    e.preventDefault();
    var token = localStorage.getItem("token");
    console.log(token, "from itemlist");
    console.log(mDesc);
    console.log(mName);
    console.log("submit clicked");
    const headers = {
      headers: {
        Authorization: token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const formData = {
      employee_type: {
        name: mName,
        description: mDesc,
        status: "active",
      },
    };

    await axios
      .post(
        "https://tranquil-hamlet-54124.herokuapp.com/employee_type",
        formData,
        headers
      )
      .then(function (response: any) {
        const res = response;
        console.log(res);
        console.log(res.headers.authorization);
      })
      .then((data: any) => {
        console.log("data obtained:", data);
        setMsg(true);
        CallApi();
      })
      .catch((error: any) => {
        console.log("wrong credentials, ");
        console.log(error);
      });
  }
  useEffect(() => {
    setMsg(false);
  }, [mName]);

  const options = [
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
  ];
  return (
    <>
      {records ? (
        <>
          <div>
            <Sidebar />
            <Topbar />
            <div className={styles.mainDiv}>
              <div>
                <h2 style={{ fontSize: "18px", fontWeight: "600" }}>
                  Projects List
                </h2>
              </div>
              <div className={styles.searchBox}> </div>
              <div className={styles.search}>Search</div>
              <button
                className={styles.addBtn}
                onClick={() => setShowModal(true)}
                style={{ color: "white" }}
              >
                + Add Project
              </button>
            </div>
            <TestingSkills records={records} />
            <Modal show={showModal} onClose={() => setShowModal(false)}>
              <div>
                <h2
                  style={{
                    paddingLeft: "15px",
                    position: "absolute",
                    top: "0px",
                    fontFamily: "Inter",
                    fontSize: "large",
                    fontWeight: "600",
                  }}
                >
                  Add Project
                </h2>
                <h6 className={styles2.modalName}>NAME</h6>
                <input
                  className={styles2.modalNameInput}
                  type="text"
                  placeholder="Enter"
                />
                <h6 className={styles2.modalClient}>CLIENT</h6>
                <input
                  className={styles2.modalClientInput}
                  type="text"
                  placeholder="Harvard University"
                />
                <h6 className={styles2.modalProjectType}>PROJECT TYPE</h6>
                <select
                  className={styles2.modalProjectTypeInput}
                  name=""
                  id=""
                  style={{ color: "rgba(33, 33, 33, 0.4)" }}
                >
                  <option selected value="" disabled>
                    Please Select...
                  </option>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                </select>
                <h6 className={styles2.modalProjectResponsible}>
                  PROJECT RESPONSIBLE
                </h6>
                <select
                  className={styles2.modalProjectResponsibleInput}
                  name=""
                  id=""
                  style={{ color: "rgba(33, 33, 33, 0.4)" }}
                >
                  <option selected disabled value="">
                    Please Select...
                  </option>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                </select>
                <h6 className={styles2.modalStartDate}>START DATE</h6>
                <input
                  className={styles2.modalStartDateInput}
                  type="text"
                  name=""
                  id=""
                  placeholder="Please Select..."
                  onFocus={(e) => (e.target.type = "date")}
                />
                <h6 className={styles2.modalEndDate}>END DATE</h6>
                <input
                  className={styles2.modalEndDateInput}
                  type="text"
                  name=""
                  id=""
                  placeholder="Please Select..."
                  onFocus={(e) => (e.target.type = "date")}
                />
                <h6 className={styles2.modalProjectStatus}>PROJECT STATUS</h6>
                <select
                  style={{ color: "rgba(33, 33, 33, 0.4)" }}
                  className={styles2.modalProjectStatusInput}
                  name=""
                  id=""
                >
                  <option selected disabled value="">
                    Please Select...
                  </option>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                </select>
                <h6 className={styles2.modalMonthlyStatus}>MONTHLY STATUS</h6>
                <select
                  className={styles2.modalMonthlyStatusInput}
                  name=""
                  id=""
                  style={{ color: "rgba(33, 33, 33, 0.4)" }}
                >
                  <option selected value="" disabled>
                    Please Select...
                  </option>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                </select>
                <button
                  className={styles2.modalCancel}
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button className={styles2.modalAddProjectBtn}>
                  Add Project
                </button>
              </div>
            </Modal>
          </div>
        </>
      ) : (
        <div>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              flexDirection: "row",
              paddingTop: "250px",
            }}
          >
            <CircularProgress size={50} color="secondary" />
          </Box>
          <span
            style={{
              position: "absolute",
              top: "210px",
              left: "560px",
              justifyContent: "center",
              fontSize: "25px",
              fontWeight: "500",
            }}
          >
            Loading...
          </span>
        </div>
      )}
    </>
  );
};

export default testing1;

/* eslint-disable react-hooks/exhaustive-deps */
import Sidebar from "../components/sidebar";
import Topbar from "../components/topbar";
import styles from "../styles/pages.module.css";
import Image from "next/image";
import plus from "../images/plus.png";
import { style } from "@mui/system";
import TableComponent from "../components/settingsComp/skillsTable";
import { useEffect, useState } from "react";
// import { Modal } from "@mui/material";
import Modal from "../components/modalproj";
import LimitedWordTextarea from "../components/textAreaInput";
import styles2 from "../styles/skills.module.css";
import Select from "react-select";
import ViewDetailsSKills from "../components/viewDetailsModals/setSkills";

const contentsOnPage = 10;
const Settings = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [phone, setPhone] = useState<any>(" ");

  const options = [
    { value: "Developer", label: "Developer" },
    { value: "Manager", label: "Manager" },
    { value: "Support", label: "Support" },
  ];
  // experiment
  const [optionsMenu, setOptionsMenu] = useState<boolean>(false);
  const [adminDetailsModal, setAdminDetailsModal] = useState<boolean>(false);
  const [addAdminModal, setAddAdminModal] = useState<boolean>(false);
  const [allChecked, setAllChecked] = useState<boolean>(false);
  const [currentPageData, setCurrentPageData] = useState<Array<any>>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const tempAdminsData: Array<any> = [];

  tempAdminsData.push(
    ["Prabhanjan", "Lorem Ipsum is simply dummy text of printing...", "Active"],
    ["Anderw", "Lorem Ipsum is simply dummy text of printing...", "Inactive"],
    ["Darshan", "Lorem Ipsum is simply dummy text of printing...", "Active"],
    ["Maheddin", "Lorem Ipsum is simply dummy text of printing...", "Inactive"],
    ["Prabhanjan", "Lorem Ipsum is simply dummy text of printing...", "Active"],
    ["Anderw", "Lorem Ipsum is simply dummy text of printing...", "Inactive"],
    ["Darshan", "Lorem Ipsum is simply dummy text of printing...", "Active"],
    ["Maheddin", "Lorem Ipsum is simply dummy text of printing...", "Inactive"],
    ["Prabhanjan", "Lorem Ipsum is simply dummy text of printing...", "Active"],
    ["Anderw", "Lorem Ipsum is simply dummy text of printing...", "Inactive"],
    ["Darshan", "Lorem Ipsum is simply dummy text of printing...", "Active"],
    ["Maheddin", "Lorem Ipsum is simply dummy text of printing...", "Inactive"],
    ["Prabhanjan", "Lorem Ipsum is simply dummy text of printing...", "Active"],
    ["Anderw", "Lorem Ipsum is simply dummy text of printing...", "Inactive"],
    ["Darshan", "Lorem Ipsum is simply dummy text of printing...", "Active"],
    ["Maheddin", "Lorem Ipsum is simply dummy text of printing...", "Inactive"],
    ["Prabhanjan", "Lorem Ipsum is simply dummy text of printing...", "Active"],
    ["Anderw", "Lorem Ipsum is simply dummy text of printing...", "Inactive"],
    ["Darshan", "Lorem Ipsum is simply dummy text of printing...", "Active"],
    ["Maheddin", "Lorem Ipsum is simply dummy text of printing...", "Inactive"]
  );

  const lastPage = Math.ceil(tempAdminsData.length / contentsOnPage);

  useEffect(() => {
    setCurrentPageData([
      ...tempAdminsData.slice(
        (currentPage - 1) * contentsOnPage,
        currentPage * contentsOnPage
      ),
    ]);
  }, [currentPage]);

  const leftPage = () => {
    if (currentPage === 1) {
      return;
    } else {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const rightPage = () => {
    if (currentPage === lastPage) {
      return;
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };
  const handleDetailClick = () => {
    setOptionsMenu(false);
    setAdminDetailsModal(true);
  };
  return (
    <div>
      <Sidebar />
      <Topbar />
      <div className={styles.mainDiv}>
        <div>
          <h2 style={{ fontSize: "18px", fontWeight: "600" }}>Skills</h2>
        </div>
        <div className={styles.searchBox}> </div>
        <div className={styles.search}>Search</div>
        <button
          className={styles.addBtn}
          style={{ color: "white" }}
          onClick={() => setShowModal(true)}
        >
          + Add Skills
        </button>
      </div>
      <TableComponent
        setAllChecked={setAllChecked}
        currentPageData={currentPageData}
        allChecked={allChecked}
        leftPage={leftPage}
        rightPage={rightPage}
        currentPage={currentPage}
        tempAdminsData={tempAdminsData}
        contentsOnPage={contentsOnPage}
        lastPage={lastPage}
        detailsModal={handleDetailClick}
      />
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <div>
          <h2
            style={{
              paddingLeft: "15px",
              position: "absolute",
              top: "0px",
              fontSize: "large",
              fontWeight: "600",
            }}
          >
            Add Skills
          </h2>
          <h6 className={styles2.modalName}>SKILL NAME</h6>
          <input
            className={styles2.modalNameInput}
            type="text"
            placeholder="Enter"
          />
          <h6 className={styles2.modalName2}>SKILL DESCRIPTION</h6>
          <LimitedWordTextarea limit={200} value={""} />
          <h6 className={styles2.modalName3}>SKILL STATUS</h6>
          <div className={styles2.modalLatestInput}>
            <Select options={options} placeholder="Select Roles" />
          </div>
          <button
            className={styles2.modalCancel}
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
          <button className={styles2.modalAddProjectBtn}>Add</button>
        </div>
      </Modal>
      <ViewDetailsSKills
        openDetails={adminDetailsModal}
        setOpenDetails={setAdminDetailsModal}
      />
    </div>
  );
};
export default Settings;

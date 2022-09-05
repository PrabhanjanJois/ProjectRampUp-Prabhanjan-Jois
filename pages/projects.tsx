/* eslint-disable react-hooks/exhaustive-deps */
import Sidebar from "../components/sidebar";
import Topbar from "../components/topbar";
import styles from "../styles/pages.module.css";
import Image from "next/image";
import plus from "../images/plus.png";
import { style } from "@mui/system";

// import Sidebar from "../components/sidebar";
// import Topbar from "../components/topbar";
// import styles from "../styles/pages.module.css";
import styles2 from "../styles/projModal.module.css";
// import Image from "next/image";

import { useEffect, useState } from "react";
import Modal from "../components/modalproj";
import { ClassNames } from "@emotion/react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import TableComponent from "../components/projectTable";
import Head from "next/head";

import ViewDetailsProject from "../components/viewDetailsModals/viewDetailsProject";

const contentsOnPage = 10;

const Projects = () => {
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
    [
      "9876567",
      "Prabhanjan",
      "Michael David",
      "lorem ipsum",
      "lorem ipsum",
      "01 Aug 2022",
      "24 Sep 2022",
    ],
    [
      "9878656",
      "Maheddin",
      "Michael David",
      "lorem ipsum",
      "lorem ipsum",
      "01 Aug 2022",
      "24 Sep 2022",
    ],
    [
      "9876865",
      "krishna",
      "Michael David",
      "lorem ipsum",
      "lorem ipsum",
      "01 Aug 2022",
      "24 Sep 2022",
    ],
    [
      "8735286",
      "Manohar",
      "Michael David",
      "lorem ipsum",
      "lorem ipsum",
      "01 Aug 2022",
      "24 Sep 2022",
    ],
    [
      "9867579",
      "Anderw",
      "Michael David",
      "lorem ipsum",
      "lorem ipsum",
      "01 Aug 2022",
      "24 Sep 2022",
    ],
    [
      "9098786",
      "Darshan",
      "Michael David",
      "lorem ipsum",
      "lorem ipsum",
      "01 Aug 2022",
      "24 Sep 2022",
    ],
    [
      "9098786",
      "Darshan",
      "Michael David",
      "lorem ipsum",
      "lorem ipsum",
      "01 Aug 2022",
      "24 Sep 2022",
    ],
    [
      "8735286",
      "Madhusudan",
      "Michael David",
      "lorem ipsum",
      "lorem ipsum",
      "01 Aug 2022",
      "24 Sep 2022",
    ],
    [
      "9878656",
      "Maheddin",
      "Michael David",
      "lorem ipsum",
      "lorem ipsum",
      "01 Aug 2022",
      "24 Sep 2022",
    ],
    [
      "9876865",
      "krishna",
      "Michael David",
      "lorem ipsum",
      "lorem ipsum",
      "01 Aug 2022",
      "24 Sep 2022",
    ],
    [
      "8735286",
      "Manohar",
      "Michael David",
      "lorem ipsum",
      "lorem ipsum",
      "01 Aug 2022",
      "24 Sep 2022",
    ],
    [
      "9867579",
      "Anderw",
      "Michael David",
      "lorem ipsum",
      "lorem ipsum",
      "01 Aug 2022",
      "24 Sep 2022",
    ],
    [
      "9098786",
      "Darshan",
      "Michael David",
      "lorem ipsum",
      "lorem ipsum",
      "01 Aug 2022",
      "24 Sep 2022",
    ],
    [
      "9098786",
      "Darshan",
      "Michael David",
      "lorem ipsum",
      "lorem ipsum",
      "01 Aug 2022",
      "24 Sep 2022",
    ],
    [
      "8735286",
      "Madhusudan",
      "Michael David",
      "lorem ipsum",
      "lorem ipsum",
      "01 Aug 2022",
      "24 Sep 2022",
    ],
    [
      "9878656",
      "Maheddin",
      "Michael David",
      "lorem ipsum",
      "lorem ipsum",
      "01 Aug 2022",
      "24 Sep 2022",
    ],
    [
      "9876865",
      "krishna",
      "Michael David",
      "lorem ipsum",
      "lorem ipsum",
      "01 Aug 2022",
      "24 Sep 2022",
    ],
    [
      "8735286",
      "Manohar",
      "Michael David",
      "lorem ipsum",
      "lorem ipsum",
      "01 Aug 2022",
      "24 Sep 2022",
    ],
    [
      "9867579",
      "Anderw",
      "Michael David",
      "lorem ipsum",
      "lorem ipsum",
      "01 Aug 2022",
      "24 Sep 2022",
    ]
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
      {/* <Head>
        <title>Projects</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <Sidebar />
      <Topbar />
      <div className={styles.mainDiv}>
        <div>
          <h2 style={{ fontSize: "18px", fontWeight: "600" }}>Projects List</h2>
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
          <h6 className={styles2.modalProjectType}>PROJECT_TYPE</h6>
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
          <button className={styles2.modalAddProjectBtn}>Add Project</button>
        </div>
      </Modal>
      <ViewDetailsProject
        openDetails={adminDetailsModal}
        setOpenDetails={setAdminDetailsModal}
      />
    </div>
  );
};
export default Projects;

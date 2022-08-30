/* eslint-disable react-hooks/exhaustive-deps */
import Sidebar from "../components/sidebar";
import Topbar from "../components/topbar";
import styles from "../styles/pages.module.css";
import styles2 from "../styles/empModal.module.css";
import Image from "next/image";
import plus from "../images/plus.png";
import { style } from "@mui/system";
import { useEffect, useState } from "react";
import TableComponent from "../components/employeeTable";
import Modal from "../components/modalEmp";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const contentsOnPage = 10;
const Employee = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [phone, setPhone] = useState<any>(" ");

  const options = [
    { value: "Developer", label: "Developer" },
    { value: "Manager", label: "Manager" },
    { value: "Support", label: "Support" },
  ];
  // experiment

  const [addAdminModal, setAddAdminModal] = useState<boolean>(false);
  const [allChecked, setAllChecked] = useState<boolean>(false);
  const [currentPageData, setCurrentPageData] = useState<Array<any>>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const tempEmpData: Array<any> = [];

  tempEmpData.push(
    [
      "012345",
      "Prabhanjan",
      "jackson.jack@econsent.com",
      "lorem ipsum",
      "Front End",
    ],
    ["982345", "James", "jackson.jack@econsent.com", "lorem ipsum", "Back End"],
    [
      "982345",
      "Elizabeth",
      "jackson.jack@econsent.com",
      "lorem ipsum",
      "Back End",
    ],
    [
      "012345",
      "Prabhanjan",
      "jackson.jack@econsent.com",
      "lorem ipsum",
      "Front End",
    ],
    ["982345", "James", "jackson.jack@econsent.com", "lorem ipsum", "Back End"],
    [
      "982345",
      "Elizabeth",
      "jackson.jack@econsent.com",
      "lorem ipsum",
      "Back End",
    ],
    [
      "012345",
      "Prabhanjan",
      "jackson.jack@econsent.com",
      "lorem ipsum",
      "Front End",
    ],
    ["982345", "James", "jackson.jack@econsent.com", "lorem ipsum", "Back End"],
    [
      "982345",
      "Elizabeth",
      "jackson.jack@econsent.com",
      "lorem ipsum",
      "Back End",
    ],
    [
      "012345",
      "Prabhanjan",
      "jackson.jack@econsent.com",
      "lorem ipsum",
      "Front End",
    ],
    ["982345", "James", "jackson.jack@econsent.com", "lorem ipsum", "Back End"],
    [
      "982345",
      "Elizabeth",
      "jackson.jack@econsent.com",
      "lorem ipsum",
      "Back End",
    ],
    [
      "012345",
      "Prabhanjan",
      "jackson.jack@econsent.com",
      "lorem ipsum",
      "Front End",
    ],
    ["982345", "James", "jackson.jack@econsent.com", "lorem ipsum", "Back End"],
    [
      "982345",
      "Elizabeth",
      "jackson.jack@econsent.com",
      "lorem ipsum",
      "Back End",
    ]
  );

  const lastPage = Math.ceil(tempEmpData.length / contentsOnPage);

  useEffect(() => {
    setCurrentPageData([
      ...tempEmpData.slice(
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
  return (
    <div>
      <Sidebar />
      <Topbar />
      <div className={styles.mainDiv}>
        <div>
          <h2 style={{ fontSize: "20px", fontFamily: "sans-serif" }}>
            Employee List
          </h2>
        </div>
        <div className={styles.searchBox}> </div>
        <div className={styles.search}>Search</div>
        <button
          className={styles.addEmpBtn}
          style={{ color: "white" }}
          onClick={() => setShowModal(true)}
        >
          + Add Employee
        </button>
      </div>
      <TableComponent
        setAllChecked={setAllChecked}
        currentPageData={currentPageData}
        allChecked={allChecked}
        leftPage={leftPage}
        rightPage={rightPage}
        currentPage={currentPage}
        tempAdminsData={tempEmpData}
        contentsOnPage={contentsOnPage}
        lastPage={lastPage}
      />
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <div>
          <h2
            style={{
              paddingLeft: "15px",
              position: "absolute",
              top: "0px",
              fontFamily: `"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif`,
              fontSize: "large",
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
          <h6 className={styles2.modalClient}>EMAIL</h6>
          <input
            className={styles2.modalClientInput}
            type="text"
            placeholder="yourmail@gmail.com"
          />
          <h6 className={styles2.modalProjectType}>PHONE NUMBER</h6>
          <div className={styles2.phone}>
            <PhoneInput
              country={"us"}
              value={phone}
              onChange={setPhone}
              inputStyle={{
                width: "215px",
                height: "30px",
                fontSize: "13px",
                paddingLeft: "48px",
                borderRadius: "5px",
              }}
              dropdownStyle={{ width: "215px" }}
            />
          </div>

          <h6 className={styles2.modalProjectResponsible}>JOINING DATE</h6>
          <input
            className={styles2.modalProjectResponsibleInput}
            name=""
            id=""
            onFocus={(e) => (e.target.type = "date")}
          ></input>
          <h6 className={styles2.modalStartDate}>SKILLS</h6>
          <select
            className={styles2.modalStartDateInput}
            name=""
            id=""
            placeholder="Please Select..."
            style={{ color: "rgba(33, 33, 33, 0.4)" }}
          >
            <option selected value="" disabled>
              Please Select...
            </option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>
          <h6 className={styles2.modalEndDate}>EMPLOYEE_TYPE</h6>
          <select
            className={styles2.modalEndDateInput}
            name=""
            id=""
            placeholder="Please Select..."
            style={{ color: "rgba(33, 33, 33, 0.4)" }}
          >
            <option selected value="" disabled>
              Please Select...
            </option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>
          <h6 className={styles2.modalProjectStatus}>SALARY</h6>
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
          <h6 className={styles2.modalMonthlyStatus}>UTILIZATION</h6>
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
          <h6 className={styles2.modalLatest}>REVENUE OPPORTUNITY</h6>
          <select
            className={styles2.modalLatestInput}
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
    </div>
  );
};
export default Employee;

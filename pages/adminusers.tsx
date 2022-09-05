/* eslint-disable react-hooks/exhaustive-deps */
import Sidebar from "../components/sidebar";
import Topbar from "../components/topbar";
import styles from "../styles/pages.module.css";
import styles2 from "../styles/adminModal.module.css";
import Image from "next/image";

import { useEffect, useState } from "react";
import Modal from "../components/modal";
import { ClassNames } from "@emotion/react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import TableComponent from "../components/admintable";
import ViewDetailsAdmin from "../components/viewDetailsModals/viewdetailsAdmin";

const contentsOnPage = 10;

const AdminUsers = () => {
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
    ["9876567", "Prabhanjan", "jois@gmail.com", "+91 987656789"],
    ["9878656", "Maheddin", "meinu@gmail.com", "+91 987656789"],
    ["9876865", "krishna", "krishna@gmail.com", "+91 987656789"],
    ["8735286", "Manohar", "manohar@gmail.com", "+91 987656789"],
    ["9867579", "Anderw", "anderw@gmail.com", "+91 987656789"],
    ["9098786", "Darshan", "darshan@gmail.com", "+91 987656789"],
    ["9098786", "Darshan", "darshan@gmail.com", "+91 987656789"],
    ["8735286", "Madhusudan", "madhu@gmail.com", "+91 987656789"],
    ["9878656", "Maheddin", "meinu@gmail.com", "+91 987656789"],
    ["9876865", "krishna", "krishna@gmail.com", "+91 987656789"],
    ["8735286", "Manohar", "manohar@gmail.com", "+91 987656789"],
    ["9867579", "Anderw", "anderw@gmail.com", "+91 987656789"],
    ["9098786", "Darshan", "darshan@gmail.com", "+91 987656789"],
    ["9098786", "Darshan", "darshan@gmail.com", "+91 987656789"],
    ["8735286", "Madhusudan", "madhu@gmail.com", "+91 987656789"],
    ["9878656", "Maheddin", "meinu@gmail.com", "+91 987656789"],
    ["8735286", "Madhusudan", "madhu@gmail.com", "+91 987656789"],
    ["9878656", "Maheddin", "meinu@gmail.com", "+91 987656789"],
    ["9876865", "krishna", "krishna@gmail.com", "+91 987656789"],
    ["8735286", "Manohar", "manohar@gmail.com", "+91 987656789"],
    ["9867579", "Anderw", "anderw@gmail.com", "+91 987656789"],
    ["9098786", "Darshan", "darshan@gmail.com", "+91 987656789"]
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
  // experiment end
  return (
    <div>
      <Sidebar />
      <Topbar />
      <div className={styles.mainDiv}>
        <div>
          <h2 style={{ fontSize: "18px", fontWeight: "600" }}>Admin users</h2>
        </div>
        <div className={styles.searchBox}> </div>
        <div className={styles.search}>Search</div>
        <button
          className={styles.addBtn}
          onClick={() => setShowModal(true)}
          style={{ color: "white" }}
        >
          + Add user
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
              fontFamily: `"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif`,
              fontSize: "large",
            }}
          >
            Invite user
          </h2>
          <div className={styles2.name1}>NAME</div>
          <input className={styles2.box1} placeholder={"Enter Name"}></input>
          <div className={styles2.email1}>EMAIL</div>
          <input className={styles2.box2} placeholder={"Enter Email"}></input>
        </div>
        <div className={styles2.phone}>
          <span className={styles2.phoneName}>PHONE NUMBER</span>
          <PhoneInput country={"us"} value={phone} onChange={setPhone} />
          <span className={styles2.role}>ROLE</span>
          <div className={styles2.roles}>
            <Select options={options} placeholder="Select Roles" />
          </div>
          <button
            className={styles2.cancelBtn}
            onClick={() => {
              setShowModal(false);
            }}
          >
            Cancel
          </button>
          <button className={styles2.submitBtn} disabled>
            Invite user
          </button>
        </div>
      </Modal>
      <ViewDetailsAdmin
        openDetails={adminDetailsModal}
        setOpenDetails={setAdminDetailsModal}
      />
    </div>
  );
};
export default AdminUsers;

/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import styles from "../styles/table.module.css";
import Pagination from "./pagination";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Modal from "./modalUtiEmp";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import styles2 from "../styles/utilization.module.css";

type EmpTableProps = {
  setAllChecked: any;
  currentPageData: Array<any>;
  allChecked: boolean;
  leftPage: any;
  rightPage: any;
  currentPage: number;
  tempAdminsData: Array<any>;
  contentsOnPage: number;
  lastPage: number;
  detailsModal: any;
};

const EmpTable = ({
  setAllChecked,
  currentPageData,
  allChecked,
  leftPage,
  rightPage,
  currentPage,
  tempAdminsData,
  contentsOnPage,
  lastPage,
  detailsModal,
}: EmpTableProps) => {
  const [useUtilization, setUseUtilization] = useState<boolean>(false);
  return (
    <table className={styles.mainTable}>
      <thead>
        <tr style={{ fontSize: "14px" }}>
          <td>
            <input
              type="checkbox"
              name=""
              id=""
              onClick={() => setAllChecked((prev: boolean) => !prev)}
            />
          </td>
          <td>
            Employee ID
            <span className={styles.topArrow}></span>
            <span className={styles.downArrow}></span>
          </td>
          <td>
            Name
            <span className={styles.topArrow}></span>
            <span className={styles.downArrow}></span>
          </td>
          <td>
            Email
            <span className={styles.topArrow}></span>
            <span className={styles.downArrow}></span>
          </td>
          <td>
            Project Name
            <span className={styles.topArrow}></span>
            <span className={styles.downArrow}></span>
          </td>
          <td>
            Skills
            <span className={styles.topArrow}></span>
            <span className={styles.downArrow}></span>
          </td>
          {/* <td>
            Start Date
            <span className={styles.topArrow}></span>
            <span className={styles.downArrow}></span>
          </td>
          <td>
            End Date
            <span className={styles.topArrow}></span>
            <span className={styles.downArrow}></span>
          </td> */}
          <td>Options</td>
        </tr>
      </thead>
      <tbody>
        {currentPageData.map((admin: Array<any>, index: number) => {
          return (
            <tr>
              <td>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={allChecked ? true : undefined}
                />
              </td>
              {admin.map((cell: string) => (
                // eslint-disable-next-line react/jsx-key
                <td
                  key={cell}
                  className={styles.clickDetails}
                  onClick={detailsModal}
                  style={{ fontSize: "small" }}
                >
                  {cell}
                </td>
              ))}
              {/* <td>
                <div>Admin</div>
              </td>
              <td>
                <span></span>
                Active
              </td> */}
              <td>
                <div>
                  <Popup
                    trigger={
                      <span style={{ fontWeight: "bolder", fontSize: "20px" }}>
                        ⋮
                      </span>
                    }
                    position="left top"
                    on="hover"
                    closeOnDocumentClick
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    contentStyle={{
                      width: "120px",
                    }}
                    arrow={false}
                  >
                    <div className={styles.popUp}>
                      <a>Edit</a>
                    </div>
                    <div className={styles.popUp}>Active/ Inactive</div>
                    <div
                      className={styles.popUp}
                      onClick={() => {
                        setUseUtilization(true);
                      }}
                    >
                      Update Utilization
                    </div>
                  </Popup>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <Modal show={useUtilization} onClose={() => setUseUtilization(false)}>
            <div>
              <h2
                style={{
                  paddingLeft: "15px",
                  position: "absolute",
                  top: "0px",
                  // fontFamily: `"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif`,
                  fontSize: "large",
                  fontWeight: "600",
                }}
              >
                Update Utilization
              </h2>
              <span className={styles2.name}> NAME</span>
              <input className={styles2.nameInput} placeholder="Enter"></input>
              <span className={styles2.email}>EMPLOYEE ID</span>
              <input className={styles2.emailInput} placeholder="Enter"></input>
              <span className={styles2.modalStartDate}>MONTH</span>
              <input
                className={styles2.modalStartDateInput}
                type="text"
                name=""
                id=""
                placeholder=" Select"
                // onFocus={(e) => (e.target.type = "date")}
              />
              <span className={styles2.modalEndDate}>YEAR</span>
              <input
                className={styles2.modalEndDateInput}
                type="text"
                name=""
                id=""
                placeholder="YYYY"
                // onFocus={(e) => (e.target.type = "date")}
              />
              <span className={styles2.monthCost}>SALARY</span>
              <input
                className={styles2.modalStartDateInput1}
                type="text"
                name=""
                id=""
                placeholder=" 0"
                // onFocus={(e) => (e.target.type = "date")}
              />
              <span className={styles2.modalEndDate2}>TOTAL UTILIZATION</span>
              <input
                className={styles2.modalEndDateInput2}
                type="text"
                name=""
                id=""
                placeholder="0"
                // onFocus={(e) => (e.target.type = "date")}
              />
              <span className={styles2.costYtd}>REVENUE LOSS</span>
              <input
                className={styles2.ytdInput}
                type="text"
                name=""
                id=""
                placeholder="0"
                // onFocus={(e) => (e.target.type = "date")}
              />
              <h6 className={styles2.modalProjectStatus}>PROJECT NAME</h6>
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
              <span className={styles2.modalEndDate21}>UTILIZATION</span>
              <input
                className={styles2.modalEndDateInput21}
                type="text"
                name=""
                id=""
                placeholder="0"
                // onFocus={(e) => (e.target.type = "date")}
              />

              <h6 className={styles2.modalProjectStatus2}>PROJECT NAME</h6>
              <select
                style={{ color: "rgba(33, 33, 33, 0.4)" }}
                className={styles2.modalProjectStatusInput2}
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
              <span className={styles2.modalEndDate212}>UTILIZATION</span>
              <input
                className={styles2.modalEndDateInput212}
                type="text"
                name=""
                id=""
                placeholder="0"
                // onFocus={(e) => (e.target.type = "date")}
              />

              <button
                className={styles2.addAnother}
                onClick={() => {
                  setUseUtilization(false);
                }}
              >
                + add another
              </button>
              <button
                className={styles2.cancelBtn}
                onClick={() => {
                  setUseUtilization(false);
                }}
              >
                Cancel
              </button>
              <button className={styles2.submitBtn} disabled>
                Save
              </button>
            </div>
          </Modal>
          <Pagination
            leftPage={leftPage}
            rightPage={rightPage}
            currentPage={currentPage}
            contentsOnPage={contentsOnPage}
            lastPage={lastPage}
            tempData={tempAdminsData}
          />
        </tr>
      </tfoot>
    </table>
  );
};

export default EmpTable;

/* eslint-disable react/jsx-key */
import React from "react";
import styles from "../styles/table.module.css";
import Pagination from "./pagination";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

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
}: EmpTableProps) => {
  return (
    <table className={styles.mainTable}>
      {/* <thead>
        <tr>
          <td>
            <input
              type="checkbox"
              name=""
              id=""
              onClick={() => setAllChecked((prev: boolean) => !prev)}
            />
          </td>
          <td>
            User ID
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
            Phone
            <span className={styles.topArrow}></span>
            <span className={styles.downArrow}></span>
          </td>
          <td>
            Role(s)
            <span className={styles.topArrow}></span>
            <span className={styles.downArrow}></span>
          </td>
          <td>
            Status
            <span className={styles.topArrow}></span>
            <span className={styles.downArrow}></span>
          </td>
          <td>Options</td>
        </tr>
      </thead> */}
      <thead>
        <tr>
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
                <td>{cell}</td>
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
                      width: "150px",
                    }}
                    arrow={false}
                  >
                    <div className={styles.popUp}>
                      <a>Edit</a>
                    </div>
                    <div className={styles.popUp}>Active/ Inactive</div>
                    <div className={styles.popUp}>Update Utilization</div>
                  </Popup>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
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

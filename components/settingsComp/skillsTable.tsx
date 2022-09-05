/* eslint-disable react/jsx-key */
import React from "react";
import styles from "../../styles/table.module.css";
import Pagination from "../pagination";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

type tableAdminProps = {
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

const skillsTable = ({
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
}: tableAdminProps) => {
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
            Name
            <span className={styles.topArrow}></span>
            <span className={styles.downArrow}></span>
          </td>
          <td>
            Description
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

              <td>
                <div>
                  {/* ⋮ */}
                  <Popup
                    trigger={
                      <span style={{ fontWeight: "bolder", fontSize: "20px" }}>
                        ⋮
                      </span>
                    }
                    position="right top"
                    on="hover"
                    closeOnDocumentClick
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    contentStyle={{
                      width: "70px",
                    }}
                    arrow={false}
                  >
                    <div className={styles.popUp}>
                      <a>Edit</a>
                    </div>
                    <div className={styles.popUp}>Archive</div>
                    <div className={styles.popUp}>Delete</div>
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

export default skillsTable;

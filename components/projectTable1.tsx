/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import styles from "../styles/table.module.css";
import Pagination from "./pagination";
import Popup from "reactjs-popup";
import ViewDetailsSkills from "./viewDetailsModals/viewDetailsProject";
import Modal from "./modalUtiEmp";
import styles2 from "../styles/utilization.module.css";
import "reactjs-popup/dist/index.css";

const TestingSkills = ({ records }: any) => {
  const [tableData, setTableData] = useState<Array<any>>(records);
  const [currentPageData, setCurrentPageData] = useState<Array<any>>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [openViewModal, setOpenViewModal] = useState<boolean>(false);
  const [rowData, setRowData] = useState();
  const [adminDetailsModal, setAdminDetailsModal] = useState<boolean>(false);
  const [allChecked, setAllChecked] = useState<boolean>(false);
  const viewmodalopen = () => setOpenViewModal(true);
  const viewmodalclose = () => setOpenViewModal(false);
  const [useUtilization, setUseUtilization] = useState<boolean>(false);
  const no_of_pages = 10;
  const last_page = 20;

  var axios = require("axios");
  useEffect(() => {
    setCurrentPageData([
      ...tableData.slice(
        (currentPage - 1) * no_of_pages,
        currentPage * no_of_pages
      ),
    ]);
  }, [currentPage]);

  useEffect(() => {
    console.log("pagination Clicked");

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
        `https://tranquil-hamlet-54124.herokuapp.com/projects/all?page=${currentPage}`,
        payload
      );
      response.then((res: any) => {
        console.log(res.data);
        setTableData(res.data);
      });
    } catch (e: any) {
      console.log(e);
    }
  }, [currentPage]);

  useEffect(() => {}, [openViewModal]);

  const handlePaginationLeft = () => {
    if (currentPage === 1) return;
    else {
      setCurrentPage((prev) => prev - 1);
      console.log("Page no decreased");
    }
  };

  const handlePaginationRight = () => {
    if (currentPage === last_page) return;
    else {
      setCurrentPage((prev) => prev + 1);
      console.log("Page no decreased");
    }
  };
  const handleClose = () => {
    setOpenViewModal(!openViewModal);
  };

  const handleViewModal = (user: any) => {
    console.log("before", openViewModal);
    setRowData(user);

    // setAdminDetailsModal(true);
    if (openViewModal) {
      viewmodalclose();
      console.log("close call");
    } else {
      viewmodalopen();
      console.log("open call");
    }
  };
  return (
    <>
      {openViewModal ? (
        <ViewDetailsSkills
          openDetails={openViewModal}
          setOpenDetails={setOpenViewModal}
          sentData={rowData}
        />
      ) : null}
      <table
        className={styles.mainTable}
        style={{ overflowX: "scroll", whiteSpace: "nowrap" }}
      >
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
              Project ID
              <span className={styles.topArrow}></span>
              <span className={styles.downArrow}></span>
            </td>
            <td>
              Name
              <span className={styles.topArrow}></span>
              <span className={styles.downArrow}></span>
            </td>
            <td>
              client
              <span className={styles.topArrow}></span>
              <span className={styles.downArrow}></span>
            </td>
            <td>
              Project Type
              <span className={styles.topArrow}></span>
              <span className={styles.downArrow}></span>
            </td>
            <td>
              Responsible
              <span className={styles.topArrow}></span>
              <span className={styles.downArrow}></span>
            </td>
            <td>
              Start Date
              <span className={styles.topArrow}></span>
              <span className={styles.downArrow}></span>
            </td>

            <td>
              End Date
              <span className={styles.topArrow}></span>
              <span className={styles.downArrow}></span>
            </td>
            <td>
              Status
              <span className={styles.topArrow}></span>
              <span className={styles.downArrow}></span>
            </td>
            <td>
              Monthly Status
              <span className={styles.topArrow}></span>
              <span className={styles.downArrow}></span>
            </td>
            <td>Options</td>
          </tr>
        </thead>
        <tbody>
          {tableData.map((admin: any, index: number) => {
            return (
              <tr
                style={{ fontSize: "small" }}
                key={index}
                onClick={() => handleViewModal(admin)}
              >
                <td>
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={allChecked ? true : undefined}
                  />
                </td>

                <td
                  className={styles.clickDetails}
                  //onClick={detailsModal}
                  style={{ fontSize: "small" }}
                >
                  {admin.id}
                </td>
                <td
                  className={styles.clickDetails}
                  //onClick={detailsModal}
                  style={{ fontSize: "small" }}
                >
                  {admin.name}
                </td>
                <td
                  className={styles.clickDetails}
                  // onClick={detailsModal}
                  style={{ fontSize: "small" }}
                >
                  {admin.client_id}
                </td>
                <td
                  className={styles.clickDetails}
                  // onClick={detailsModal}
                  style={{ fontSize: "small" }}
                >
                  {admin.project_type}
                </td>
                <td
                  className={styles.clickDetails}
                  // onClick={detailsModal}
                  style={{ fontSize: "small" }}
                >
                  {admin.project_manager_id}
                </td>
                <td
                  className={styles.clickDetails}
                  // onClick={detailsModal}
                  style={{ fontSize: "small" }}
                >
                  {admin.start_date}
                </td>
                <td
                  className={styles.clickDetails}
                  // onClick={detailsModal}
                  style={{ fontSize: "small" }}
                >
                  {admin.end_date}
                </td>
                <td
                  className={styles.clickDetails}
                  //onClick={detailsModal}
                  style={{ fontSize: "small", color: "#33BC28" }}
                >
                  Running
                </td>
                <td
                  className={styles.clickDetails}
                  //onClick={detailsModal}
                  style={{ fontSize: "small", color: "#E02424" }}
                >
                  Behind Schedule
                </td>
                <td>
                  <div>
                    {/* ⋮ */}
                    <Popup
                      trigger={
                        <span
                          style={{ fontWeight: "bolder", fontSize: "20px" }}
                        >
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
              <span className={styles2.name}>PROJECT NAME</span>
              <input className={styles2.nameInput} placeholder="Enter"></input>
              <span className={styles2.email}>PROJECT TYPE</span>
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
              <span className={styles2.monthCost}>MONTHLY COST</span>
              <input
                className={styles2.modalStartDateInput1}
                type="text"
                name=""
                id=""
                placeholder=" 0"
                // onFocus={(e) => (e.target.type = "date")}
              />
              <span className={styles2.modalEndDate2}>MONTHLY UTILIZATION</span>
              <input
                className={styles2.modalEndDateInput2}
                type="text"
                name=""
                id=""
                placeholder="0"
                // onFocus={(e) => (e.target.type = "date")}
              />
              <span className={styles2.costYtd}>COST YTD</span>
              <input
                className={styles2.ytdInput}
                type="text"
                name=""
                id=""
                placeholder="0"
                // onFocus={(e) => (e.target.type = "date")}
              />
              <h6 className={styles2.modalProjectStatus}>EMPLOYEE NAME</h6>
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
              <span className={styles2.costYtd2}>COST</span>
              <input
                className={styles2.ytdInput2}
                type="text"
                name=""
                id=""
                placeholder="0"
                // onFocus={(e) => (e.target.type = "date")}
              />
              <h6 className={styles2.modalProjectStatus2}>EMPLOYEE NAME</h6>
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
              <span className={styles2.costYtd21}>COST</span>
              <input
                className={styles2.ytdInput21}
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
          <tr>
            <Pagination
              leftPage={handlePaginationLeft}
              rightPage={handlePaginationRight}
              currentPage={currentPage}
              contentsOnPage={no_of_pages}
              lastPage={last_page}
              tempData={tableData}
            />
          </tr>
        </tfoot>
      </table>
    </>
  );
};
export default TestingSkills;

/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import styles from "../../styles/table.module.css";
import Pagination from "../pagination";
import Popup from "reactjs-popup";
import ViewDetailsSkills from "../viewDetailsModals/setSkills";
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
        `https://tranquil-hamlet-54124.herokuapp.com/employee_types/all?page=${currentPage}`,
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
                  {admin.name}
                </td>
                <td
                  className={styles.clickDetails}
                  //onClick={detailsModal}
                  style={{ fontSize: "small" }}
                >
                  {admin.description}
                </td>
                <td
                  className={styles.clickDetails}
                  // onClick={detailsModal}
                  style={{ fontSize: "small" }}
                >
                  {admin.status}
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

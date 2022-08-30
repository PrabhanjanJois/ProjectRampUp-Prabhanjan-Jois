import React from "react";
import styles from "../styles/pagination.module.css";

type PaginationProps = {
  leftPage: any;
  rightPage: any;
  currentPage: number;
  contentsOnPage: number;
  lastPage: number;
  tempData: Array<any>;
};

const Pagination = ({
  leftPage,
  rightPage,
  currentPage,
  contentsOnPage,
  lastPage,
  tempData,
}: PaginationProps) => {
  return (
    <td className={styles.pagination}>
      <div onClick={leftPage} className={styles.leftPage}></div>
      <div onClick={rightPage} className={styles.rightPage}></div>
      <div className={styles.paginationText}>
        Showing{" "}
        <span className={styles.boldPaginationText}>
          {(currentPage - 1) * contentsOnPage +
            1 +
            "-" +
            (currentPage === lastPage
              ? tempData.length
              : currentPage * contentsOnPage)}
        </span>{" "}
        of <span className={styles.boldPaginationText}>{tempData.length}</span>
      </div>
    </td>
  );
};

export default Pagination;

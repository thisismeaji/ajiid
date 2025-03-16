import React from "react";
import Styles from "../pagination/pagination.module.css";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>; // Update tipe ini
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  setCurrentPage,
  totalPages,
}) => {
  return (
    <div className={Styles.pagination}>
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className={currentPage === 1 ? Styles.disabled : ""}
      >
        Prev
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(index + 1)}
          className={currentPage === index + 1 ? Styles.active : ""}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        className={currentPage === totalPages ? Styles.disabled : ""}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

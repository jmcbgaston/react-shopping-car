import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import "./Pagination.css";

export default function Pagination({
  pageNumber,
  totalPageNumbers,
  onNext,
  onPrevious,
}) {
  const isFirstPage = pageNumber === 0;
  const isLastPage = pageNumber === totalPageNumbers;

  return (
    <div className="pagination">
      <button
        className={`previous ${isFirstPage ? "first-page" : ""}`}
        disabled={isFirstPage}
        onClick={() => onPrevious()}
      >
        <ArrowLeftIcon className="arrow-left-icon" />
        <p>Previous Page</p>
      </button>
      <button
        className={`next ${isLastPage ? "last-page" : ""}`}
        disabled={isLastPage}
        onClick={() => onNext()}
      >
        <p>Next Page</p>
        <ArrowRightIcon className="arrow-right-icon" />
      </button>
    </div>
  );
}

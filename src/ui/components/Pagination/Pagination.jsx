import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import "./Pagination.css";

export default function Pagination({
  pageNumber,
  totalPageNumbers,
  onNext,
  onPrevious,
}) {
  return (
    <div className="pagination">
      <button className="previous" onClick={() => onPrevious()}>
        <ArrowLeftIcon className="arrow-left-icon" />
        <p>Previous Page</p>
      </button>
      <button className="next" onClick={() => onNext()}>
        <p>Next Page</p>
        <ArrowRightIcon className="arrow-right-icon" />
      </button>
    </div>
  );
}

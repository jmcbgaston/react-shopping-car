import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import "./Pagination.css";

export default function Pagination({ pageNumber, totalPageNumbers }) {
  return (
    <div className="pagination">
      <button className="previous">
        <ArrowLeftIcon className="arrow-left-icon" />
        <p>Previous Page</p>
      </button>
      <button className="next">
        <p>Next Page</p>
        <ArrowRightIcon className="arrow-right-icon" />
      </button>
    </div>
  );
}

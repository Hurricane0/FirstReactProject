import React, { useState } from "react";
import s from "./Paginator.module.css";

const Paginator = ({
  currentPage,
  pageSize,
  totalUsersCount,
  onPageChanged,
  portionSize = 9
}) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  const portionCount = Math.ceil(pagesCount / portionSize);
  let [currentPortionNumber, setCurrentPortionNumber] = useState(1);
  let leftPortionPageNumber = (currentPortionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = currentPortionNumber * portionSize;

  return (
    <div className={s.pagesNumbersBlock}>
      {currentPortionNumber > 1 && (
        <button
          onClick={() => setCurrentPortionNumber(currentPortionNumber - 1)}
        >{`<`}</button>
      )}
      {pages
        .filter(
          page =>
            page >= leftPortionPageNumber && page <= rightPortionPageNumber
        )
        .map(page => {
          return (
            <span
              key={page}
              className={currentPage === page ? s.selectedPage : undefined}
              onClick={() => {
                onPageChanged(page);
              }}
            >
              {page}
            </span>
          );
        })}
      {currentPortionNumber < portionCount && (
        <button
          onClick={() => setCurrentPortionNumber(currentPortionNumber + 1)}
        >
          {`>`}
        </button>
      )}
    </div>
  );
};

export default Paginator;

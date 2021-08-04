import React, { useState } from 'react';
import './pagination.scss';

export default function Pagination({ users, usersPerPage, paginate }) {
  const [listOfPage, setListOfPage] = useState(1);
  const [pagePerList] = useState(5);
  const indexLastPageInList = listOfPage * pagePerList;
  const indexFirstPageInList = indexLastPageInList - pagePerList;

  const pageNumbers = [];
  const countAllPages = Math.ceil(users.length / usersPerPage);

  for (let i = 1; i <= countAllPages; i++) {
    pageNumbers.push(
      <li className="pagination__list-item" key={i} onClick={() => paginate(i)}>
        {i}
      </li>,
    );
  }

  const currentPages = pageNumbers.slice(
    indexFirstPageInList,
    indexLastPageInList,
  );

  const toPrevPages = () => {
    listOfPage > 1 && setListOfPage(listOfPage - 1);
  };
  const toNextPages = () => {
    listOfPage < countAllPages / pagePerList && setListOfPage(listOfPage + 1);
  };

  return (
    <nav className="pagination">
      <div className="pagination__prev" onClick={() => toPrevPages()}>
        {listOfPage === 1 ? (
          <img
            className="pagination__arrow-prev"
            src={require('./images/inactive-arrow.svg').default}
            alt="Prev page"
          />
        ) : (
          <img
            className="pagination__arrow-prev-act"
            src={require('./images/active-arrow.svg').default}
            alt="Prev page"
          />
        )}
      </div>
      <ul className="pagination__list">{currentPages}</ul>
      <div className="pagination__next" onClick={() => toNextPages()}>
        {listOfPage < countAllPages / pagePerList ? (
          <img
            className="pagination__arrow-next"
            src={require('./images/active-arrow.svg').default}
            alt="Next page"
          />
        ) : (
          <img
            className="pagination__arrow-next-dis"
            src={require('./images/inactive-arrow.svg').default}
            alt="Next page"
          />
        )}
      </div>
    </nav>
  );
}

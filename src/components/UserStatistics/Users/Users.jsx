import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './users.scss';
import arrow from '../images/arrow.svg';
import users from '../../../api/users.json';
import users_statistics from '../../../api/users_statistic.json';
import Pagination from './Pagination/Pagination';

export default function Users(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(50);
  const indexLastUser = currentPage * usersPerPage;
  const indexFirstUser = indexLastUser - usersPerPage;

  const bodyTable = users.slice(indexFirstUser, indexLastUser).map(user => {
    const linkToUserStatistics = () => {
      props.history.push(`/usersStatistics/${user.id}`);
    };

    const userStatistics = users_statistics.filter(
      item => user.id === item.user_id,
    );

    let totalViews = 0;
    let totalClicks = 0;
    userStatistics.forEach(item => {
      // eslint-disable-next-line
      return (totalViews += item.page_views), (totalClicks += item.clicks);
    });

    return (
      <tr
        className="table__tr-body"
        onClick={linkToUserStatistics}
        key={user.id}
      >
        <td className="table__td">{user.id}</td>
        <td className="table__td">{user.first_name}</td>
        <td className="table__td">{user.last_name}</td>
        <td className="table__td">{user.email}</td>
        <td className="table__td">{user.gender}</td>
        <td className="table__td">{user.ip_address}</td>
        <td className="table__td">{totalClicks}</td>
        <td className="table__td">{totalViews}</td>
      </tr>
    );
  });

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="users">
      <div className="container">
        <div className="users__content">
          <div className="users__links">
            <span className="users__mp-link">
              <Link to="/">Main page</Link>
            </span>
            <img src={arrow} alt="arrow" className="users__img" />
            <span className="users__current-link">Users statistics</span>
          </div>
          <h2 className="users__title">Users statistics</h2>
          <table className="table">
            <thead className="table__head">
              <tr className="table__tr-head">
                <th className="table__th">Id</th>
                <th className="table__th">First name</th>
                <th className="table__th">Last name</th>
                <th className="table__th">Email</th>
                <th className="table__th">Gender</th>
                <th className="table__th">IP address</th>
                <th className="table__th">Total ckicks</th>
                <th className="table__th">Total page views</th>
              </tr>
            </thead>
            <tbody className="table__body">{bodyTable}</tbody>
          </table>
          <Pagination
            users={users}
            usersPerPage={usersPerPage}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
}

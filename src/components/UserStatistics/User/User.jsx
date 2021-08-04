import React from 'react';
import { Link } from 'react-router-dom';
import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Line,
  ResponsiveContainer,
} from 'recharts';
import users from '../../../api/users.json';
import users_statistics from '../../../api/users_statistic.json';
import arrow from '../images/arrow.svg';
import './user.scss';

export default function User(props) {
  const userStatistics = users_statistics.filter(
    user => +props.match.params.id === user.user_id,
  );
  const user = users.filter(user => +props.match.params.id === user.id)[0];

  return (
    <div>
      <div className="users__links">
        <span className="users__mp-link">
          <Link to="/">Main page</Link>
        </span>
        <img src={arrow} alt="arrow" className="users__img" />
        <span className="users__mp-link">
          <Link to="/usersStatistics">Users statistics</Link>
        </span>
        <img src={arrow} alt="arrow" className="users__img" />
        <span className="users__current-link">
          {`${user.first_name} ${user.last_name}`}
        </span>
      </div>
      <h2 className="user__title">{`${user.first_name} ${user.last_name}`}</h2>
      <h3 className="h3 user__subtitle">Clicks</h3>
      <div className="user__graph">
        <ResponsiveContainer width="90%" height={280}>
          <LineChart
            width={800}
            height={280}
            data={userStatistics}
            margin={{ top: 25, right: 20, left: 10, bottom: 5 }}
          >
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#f5f5f5" vertical={false} />
            <Line
              type="monotone"
              dataKey="clicks"
              stroke="#3a80ba"
              yAxisId={0}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <h3 className="h3 user__subtitle">Views</h3>
      <div className="user__graph">
        <ResponsiveContainer width="90%" height={280}>
          <LineChart
            width={800}
            height={300}
            data={userStatistics}
            margin={{ top: 25, right: 20, left: 10, bottom: 5 }}
          >
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#f5f5f5" vertical={false} />
            <Line
              type="monotone"
              dataKey="page_views"
              stroke="#3a80ba"
              yAxisId={0}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

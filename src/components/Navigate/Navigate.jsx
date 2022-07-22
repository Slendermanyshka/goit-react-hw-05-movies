import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

import s from './Navigate.module.css';

const Link = styled(NavLink)`
  &.active {
    color: red;
  }
`;

const Navigate = () => {
  return (
    <>
      <nav className={s.Navigate}>
        <Link to="/" className={s.NavHome}>
          Home
        </Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigate;

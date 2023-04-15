import {NavLink, Outlet} from 'react-router-dom';

import './index.scss';

const AppLayout = () => {
  return (
    <>
      <nav>
        <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>Main</NavLink>
        <NavLink to="/main">main2</NavLink>
        <NavLink to="/app404">Non Page </NavLink>
      </nav>
      <Outlet/>
    </>
  );
};

export default AppLayout;

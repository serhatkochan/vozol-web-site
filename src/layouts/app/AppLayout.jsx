import './index.scss';
import {Outlet} from 'react-router-dom';
import Header from "src/layouts/app/header";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet/>
    </>
  );
};

export default AppLayout;

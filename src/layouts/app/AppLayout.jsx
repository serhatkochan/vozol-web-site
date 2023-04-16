import './index.scss';
import {Outlet} from 'react-router-dom';
import Header from "src/layouts/app/header";
import Footer from "src/layouts/app/footer/index.jsx";

const AppLayout = () => {
  return (
    <>
      <Header />
      <div className="content">
        <Outlet/>
      </div>
      <Footer />
    </>
  );
};

export default AppLayout;

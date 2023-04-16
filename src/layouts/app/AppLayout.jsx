import './index.scss';
import {Outlet} from 'react-router-dom';
import Header from "src/layouts/app/header";
import Footer from "src/layouts/app/footer/index.jsx";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import TranslateHelper from "src/helpers/translateHelper.js";

const AppLayout = () => {
  return (
    <>
      <Header />
      <div className="content">
        <Outlet/>
      </div>
      <Footer />
      <FloatingWhatsApp
        phoneNumber="905445444444"
        accountName={TranslateHelper.Translate('order_line')}
        statusMessage={TranslateHelper.Translate('active')}
        chatMessage={TranslateHelper.Translate('hello_how_can_i_help_you')}
        notification
        notificationDelay={1}
        allowEsc
        allowClickAway
      />
    </>
  );
};

export default AppLayout;

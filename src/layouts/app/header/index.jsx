import {useEffect, useState} from "react";
import {Menu} from 'antd';

import {NavLink, useLocation, useNavigate} from 'react-router-dom';
import menuData from "src/layouts/app/header/menuData.jsx";

import logo from 'src/assets/logo.png';

import {updateSystemConfig} from "src/helpers/systemConfigHelper.js";
import {SettingOutlined} from "@ant-design/icons";

const Header = () => {
  const [currentPage, setCurrentPage] = useState('');
  const {pathname} = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname) {
      setCurrentPage(pathname);
    }
  }, [pathname])

  const onChangePage = (e) => {
    setCurrentPage(e.key);
    navigate(e.key)
  };

  const onChangeLang = (e) => {
    updateSystemConfig('language', e.key)
    window.location.reload();
  }

  return (
    <div className="headerWrapper">
      <div>
        <NavLink to="/">
          <img src={logo} alt=""/>
        </NavLink>
      </div>
      <div>
        <Menu
          onClick={onChangePage}
          selectedKeys={[currentPage]}
          mode="horizontal"
          items={menuData}
        />
      </div>
      <div>
        <Menu
          mode="horizontal"
          onClick={onChangeLang}
          selectedKeys={null}
          items={[
            {
              icon: <SettingOutlined />,
              key: 'lang',
              children: [
                {
                  label: 'TR',
                  key: 'tr'
                },
                {
                  label: 'EN',
                  key: 'en'
                },
              ]
            }
          ]}
        />
      </div>
    </div>
  );
};

export default Header;

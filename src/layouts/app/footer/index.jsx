import {Button, Typography} from "antd";
import {InstagramOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

const {Title} = Typography;
const Footer = () => {
  return (
    <div className="footerWrapper">
      <div className="container">
        <div className="footerItems">
          <div className="item">
            <Button type="text" href="https://www.instagram.com/vozolpuff.bar/" target="_blank">
              <InstagramOutlined target="_blank" href="https://www.instagram.com/vozolpuff.bar/"/>
            </Button>
          </div>
        </div>
        <div className="footerItems">
          <div className="item">
            <Link to="about-us" preventScrollReset={true}>
              <Title level={4}>About Us</Title>
            </Link>
          </div>
          <div className="item">
            <Link to="support" preventScrollReset={true}>
              <Title level={4}>Support</Title>
            </Link>
          </div>
          <div className="item">
            <Link to="marketing-policy" preventScrollReset={true}>
              <Title level={4}>Marketing Policy</Title>
            </Link>
          </div>
        </div>
        <div className="footerItems">
          <div className="item">
            <Link to="terms-of-use" preventScrollReset={true}>
              <Title level={4}>Terms of Use</Title>
            </Link>
          </div>
          <div className="item">
            <Link to="privacy-policy" preventScrollReset={true}>
              <Title level={4}>Privacy Policy</Title>
            </Link>
          </div>
        </div>
        <div className="footerItems">
          <Title level={5}>© 2023 Vozol Orjinal Satış Sitesi</Title>
        </div>
      </div>
    </div>
  );
};

export default Footer;

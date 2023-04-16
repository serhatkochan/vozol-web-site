import {Button, Typography} from "antd";
import {InstagramOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import TranslateHelper from "src/helpers/translateHelper.js";

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
              <Title level={4}>{TranslateHelper.Translate('about_us')}</Title>
            </Link>
          </div>
          <div className="item">
            <Link to="support" preventScrollReset={true}>
              <Title level={4}>{TranslateHelper.Translate('support')}</Title>
            </Link>
          </div>
          <div className="item">
            <Link to="marketing-policy" preventScrollReset={true}>
              <Title level={4}>{TranslateHelper.Translate('marketing_policy')}</Title>
            </Link>
          </div>
        </div>
        <div className="footerItems">
          <div className="item">
            <Link to="terms-of-use" preventScrollReset={true}>
              <Title level={4}>{TranslateHelper.Translate('terms_of_use')}</Title>
            </Link>
          </div>
          <div className="item">
            <Link to="privacy-policy" preventScrollReset={true}>
              <Title level={4}>{TranslateHelper.Translate('privacy_policy')}</Title>
            </Link>
          </div>
        </div>
        <div className="footerItems">
          <Title level={5}>{TranslateHelper.Translate('copyright')}</Title>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import TranslateHelper from "src/helpers/translateHelper.js";
import { Typography } from 'antd';

import './index.scss';

const { Title } = Typography;

const Wholoscale = () => {
  return (
    <div className="container">
      <div className="description">
        <Title>
          {TranslateHelper.Translate('wholoscale')}
        </Title>
        <Title level={5}>Elf bar, Vozol Toptan alımlarda en az alım 50 adettir.</Title>
        <Title level={5}>Toptan iletişim için (Sadece Toptan Alımlar İçin Yazınız): 0(544) 444 44 44</Title>
      </div>
    </div>
  );
};

export default Wholoscale;

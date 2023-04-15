import TranslateHelper from "src/helpers/translateHelper.js";

import './index.scss';

const Wholoscale = () => {
  return (
    <div className="container">
      <div className="description">
        <h1>
          {TranslateHelper.Translate('wholoscale')}
        </h1>
        <h5>Elf bar, Vozol Toptan alımlarda en az alım 50 adettir.</h5>
        <h5>Toptan iletişim için (Sadece Toptan Alımlar İçin Yazınız): 0(532) 316 20 79</h5>
      </div>
    </div>
  );
};

export default Wholoscale;

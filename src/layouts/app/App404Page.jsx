import {Link} from "react-router-dom";
import TranslateHelper from "src/helpers/translateHelper";

const App404Page = () => {
  return (
    <div className="">
      <h1>{TranslateHelper.Translate('page_not_found')}</h1>
      <Link to="/" >{TranslateHelper.Translate('back_to_home_page')}</Link>
    </div>
  );
};

export default App404Page;

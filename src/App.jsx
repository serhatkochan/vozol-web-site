import {I18nextProvider} from 'react-i18next';
import {Helmet} from "react-helmet";
import {ConfigProvider} from 'antd';

import i18n from 'src/translations';

import trTr from 'antd/lib/locale/tr_TR';
import enUS from 'antd/lib/locale/en_US';

import {getLanguage} from "src/helpers/systemConfigHelper.js";
import TranslateHelper from "src/helpers/translateHelper.js";

import 'antd/dist/reset.css';
import {lazy, Suspense} from "react";

const Routes = lazy(() => import('./routes/routes'));

function App() {
  const currentLang = getLanguage();
  return (
    <>
      <Helmet htmlAttributes={{lang: currentLang}}>
        <title>{TranslateHelper.Translate('heeh')}</title>
      </Helmet>
      <I18nextProvider i18n={i18n}>
        <ConfigProvider locale={currentLang === 'tr' ? trTr : enUS}>
          <Suspense fallback={<div style={{background: "black"}}></div>} >
            <Routes />
          </Suspense>
        </ConfigProvider>
      </I18nextProvider>
    </>
  )
}

export default App

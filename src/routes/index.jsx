import {AppLayout, App404Page} from "src/layouts/app"
import Main from "src/pages/main";
import Wholoscale from "src/pages/wholoscale";
import Category from "src/pages/category";
import AboutUs from "src/layouts/app/footer/aboutUs.jsx";
import Support from "src/layouts/app/footer/support.jsx";
import MarketingPolicy from "src/layouts/app/footer/marketingPolicy.jsx";
import TermsOfUse from "src/layouts/app/footer/termsOfUse.jsx";
import PrivacyPolicy from "src/layouts/app/footer/privacyPolicy.jsx";
import Product from "src/pages/product/index.jsx";

const routes = [
  {
    path: '/',
    element: <AppLayout/>,
    children: [
      {
        index: true,
        element: <Main/>
      },
      {
        path: 'wholoscale',
        element: <Wholoscale />,
      },
      {
        path: 'category/:to',
        element: <Category />,
      },
      {
        path: 'product/:to',
        element: <Product />,
      },
      {
        path: 'about-us',
        element: <AboutUs />
      },
      {
        path: 'support',
        element: <Support />
      },
      {
        path: 'marketing-policy',
        element: <MarketingPolicy />
      },
      {
        path: 'terms-of-use',
        element: <TermsOfUse />
      },
      {
        path: 'privacy-policy',
        element: <PrivacyPolicy />
      },
    ]
  },
  {
    path: '*',
    element: <App404Page/>
  }
]

const authMap = routes => routes.map(route => {
  if (route?.children) {
    route.children = authMap(route.children)
  }
  return route;
})
export default authMap(routes);

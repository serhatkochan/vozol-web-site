import {AppLayout, App404Page} from "src/layouts/app"
import Main from "src/pages/main";
import ElfBarBc5000 from "src/pages/category/elfBarBc5000.jsx";
import Vozol6000 from "src/pages/category/vozol6000.jsx";
import Vozol10000 from "src/pages/category/vozol10000.jsx";
import Wholoscale from "src/pages/wholoscale";

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
        path: 'product/elf-bar-bc-5000',
        element: <ElfBarBc5000 />,
      },
      {
        path: 'product/vozol-6000',
        element: <Vozol6000 />,
      },
      {
        path: 'product/vozol-10000',
        element: <Vozol10000 />,
      },
      {
        path: 'wholoscale',
        element: <Wholoscale />,
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

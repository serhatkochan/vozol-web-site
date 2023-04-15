import {AppLayout, App404Page} from "src/layouts/app"
import Main from "src/pages/main";

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
        path: 'main',
        element: <Main />,
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

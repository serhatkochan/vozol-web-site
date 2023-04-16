import {useRoutes} from "react-router-dom";
import routes from "src/routes/index.jsx";

const Routes = () => {
  return (
    <>
      {useRoutes(routes)}
    </>
  );
};

export default Routes;

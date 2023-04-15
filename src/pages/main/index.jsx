import Carousel from "src/pages/main/carousel";
import Categories from "src/pages/main/categories/index.jsx";

import './index.scss'
import Products from "src/pages/main/products/index.jsx";
const Main = () => {
  return (
    <>
      <Carousel />
      <div className="container">
        <Categories />
        <Products />
      </div>
    </>
  );
};

export default Main;

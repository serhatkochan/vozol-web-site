import React from 'react';
import {useNavigate} from "react-router-dom";
import categories from "src/assets/data/categories.json";
import {Card} from "antd";
import TranslateHelper from "src/helpers/translateHelper.js";
import Image from "src/components/image/index.jsx";

const Products = () => {
  const navigate = useNavigate();
  const locale = "tr-TR";
  const options = {
    style: "currency",
    currency: "TRY",
  };

  return (
    <div className="productsWrapper">
      <div className="cardWrapper info">
        {categories.map((category) => {
          const productList = category.showMainPage ? category.productList.map((product) => {
            return (
              <>
                <Card
                  key={product.id}
                  hoverable
                  cover={<Image src={product.avatar}  />}
                  onClick={() => navigate(product.to)}
                >
                  <Card.Meta
                    title={TranslateHelper.Translate(product.name)}
                    description={<div className="priceWrapper">
                        <s>{product.totalPrice.toLocaleString(locale, options)}</s> <b>{product.salePrice.toLocaleString(locale, options)}</b>
                      </div>}
                  />
                </Card>
              </>
            )
          }) : <></>
          return category.showMainPage ? <>
            <div className="info">
              {category.key}
              <Image src={category.headerImage}  />
            </div>
            {productList}
          </> : <></>
        })}
      </div>
    </div>
  );
};

export default Products;

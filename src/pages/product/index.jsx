import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import TranslateHelper from "src/helpers/translateHelper.js";
import categories from "src/assets/data/categories.json";
import {Breadcrumb, Typography} from "antd";

import './index.scss';
import FormatHelper from "src/helpers/formatHelper.js";
import Image from "src/components/image/index.jsx";

const {Text, Title} = Typography;

const Product = () => {
  const {to} = useParams();
  const [selectedProduct, setSelectedProduct] = useState({name: '', salePrice: 0, totalPrice: 0});
  const productName = TranslateHelper.Translate(selectedProduct.name);

  useEffect(() => {
    if (to) {
      categories.forEach((category) => {
        const foundedProduct = category.productList.find((product) => product.to === `product/${to}`)
        if (foundedProduct) {
          setSelectedProduct(foundedProduct);
        }
      });
    }
  }, [to]);
  return (
    <div className="container productWrapper">
      <div className="breadcrumb">
        <Breadcrumb
          items={[
            {
              title: <Link to="/">{TranslateHelper.Translate('main_page')}</Link>,
            },
            {
              title: productName
            },
          ]}
        />
      </div>
      <div className="productImageWrapper">
        <Image
          preview={false}
          src={selectedProduct?.avatar}
        />
      </div>
      <div className="productDescription">
        <div className="title"><Title level={1}>asd{TranslateHelper.Translate(productName)}</Title></div>
        <div className="priceWrapper">
          <Text delete>{FormatHelper.GetCurrency(selectedProduct?.totalPrice)}</Text>
          <Text strong>{FormatHelper.GetCurrency(selectedProduct?.salePrice)}</Text>
        </div>
        <div className="stock">
          {
            selectedProduct.stock !== 0 ?
              <Text type="success">
                {TranslateHelper.FormatTranslate({
                  key: 'count_in_stock',
                  format: {
                    count: selectedProduct.stock
                  }
                })}
              </Text>
              : <Text type="danger">{TranslateHelper.Translate('out_of_stock')}</Text>
          }
        </div>
      </div>
    </div>
  );
};

export default Product;

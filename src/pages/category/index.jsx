import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import categories from "src/assets/data/categories.json";
import TranslateHelper from "src/helpers/translateHelper.js";
import FormatHelper from 'src/helpers/formatHelper.js';

import {Card, Tooltip, Typography} from 'antd';

import './index.scss';
import Image from "src/components/image/index.jsx";
import {Helmet} from "react-helmet";

const {Title, Text} = Typography;


const Category = () => {
  const {to} = useParams();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categoryName = selectedCategory ? TranslateHelper.Translate(selectedCategory.name) : '';

  useEffect(() => {
    if (to) {
      const newSelectedCategory = categories.find((category) => category.to === `category/${to}`);
      if (newSelectedCategory) {
        setSelectedCategory(newSelectedCategory);
      }
    }
  }, [to]);

  return (
    <div className="container">
      <Helmet>
        <title>
          {TranslateHelper.Translate(selectedCategory?.name)}
        </title>
      </Helmet>
      <Title>{categoryName}</Title>
      <div>
        <Title level={3}>{categoryName}</Title>
        <span> {TranslateHelper.Translate(selectedCategory?.description)}</span>
      </div>
      <div className="featuresWrapper">
        <Title level={3}>
          {TranslateHelper.FormatTranslate({
            key: 'category_features',
            format: {
              categoryName: categoryName
            }
          })}
        </Title>
        {
          selectedCategory?.features && (
            selectedCategory.features.type === 'array' ? selectedCategory.features.keyList.map((key, index) => (
              <li key={index}>{TranslateHelper.Translate(key)}</li>
            )) : TranslateHelper.Translate(selectedCategory.features.key)
          )
        }
      </div>
      <div>
        <Title level={3}>
          {TranslateHelper.Translate('products')}
        </Title>
      </div>
      <div className="cardWrapper">
        {
          selectedCategory?.productList.map((product) => {
            const productName = TranslateHelper.Translate(product.name);
            return (
              <Card
                key={product.id}
                hoverable
                cover={<a href={"/" + product.to}>
                  <Image src={product.avatar} preview={false}/>
                </a>}
              >
                <a href={"/" + product.to}>
                  <Tooltip title={productName}>
                    <Card.Meta
                      title={productName}
                      description={<div className="priceWrapper">
                        <Text delete>{FormatHelper.GetCurrency(product.totalPrice)}</Text>
                        <Text strong>{FormatHelper.GetCurrency(product.salePrice)}</Text>
                      </div>}
                    />
                  </Tooltip>
                </a>
              </Card>
            )
          })
        }
      </div>
    </div>
  );
}
  ;

  export default Category;

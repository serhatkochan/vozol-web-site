import {Link, useNavigate} from "react-router-dom";
import categories from "src/assets/data/categories.json";
import {Card, Tooltip, Typography} from "antd";
import TranslateHelper from "src/helpers/translateHelper.js";
import Image from "src/components/image/index.jsx";
import FormatHelper from "src/helpers/formatHelper.js";

const {Text} = Typography;

const Products = () => {
  const navigate = useNavigate();
  return (
    <div className="productsWrapper">
      <div className="cardWrapper info">
        {categories.map((category) => {
          const productList = category.showMainPage ? category.productList.map((product) => {
            const productName = TranslateHelper.Translate(product.name);
            return (
              <Card
                key={product.id}
                hoverable
                cover={<Image src={product.avatar} preview={false}/>}
                onClick={() => navigate(product.to)}
              >
                <Tooltip title={productName}>
                  <Card.Meta
                    title={productName}
                    description={<div className="priceWrapper">
                      <Text delete>{FormatHelper.GetCurrency(product.totalPrice)}</Text>
                      <Text strong>{FormatHelper.GetCurrency(product.salePrice)}</Text>
                    </div>}
                  />
                </Tooltip>
              </Card>
            )
          }) : <></>
        return category.showMainPage ? <>
        <div className="info">
          {category.key}
          <Link to={category.to}>
            <Image src={category.headerImage} preview={false}/>
          </Link>
        </div>
        {productList}
      </> : <></>
        })}
      </div>
    </div>
  );
}
  ;

  export default Products;

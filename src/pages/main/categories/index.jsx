import categories from 'src/assets/data/categories.json'
import {Card} from "antd";
import TranslateHelper from "src/helpers/translateHelper.js";
import {useNavigate} from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();
  return (
    <div className="categoriesWrapper">
      <div className="info">
        <img src="src/assets/images/mng_kargo.png" alt=""/>
      </div>
      <div className="cardWrapper info">
        {categories.map((category) => {
          return (
            <Card
              key={category.id}
              hoverable
              cover={<img src={`src/assets/${category.avatar}.png`} alt=""/>}
              onClick={() => navigate(category.to)}
            >
              <Card.Meta
                title={TranslateHelper.Translate(category.name)}
                description={TranslateHelper.FormatTranslate({
                  key: 'there_are_count_product',
                  format: {
                    count: category.productList.length || 0
                  }
                })}

              />
            </Card>
          )
        })}
      </div>
      <div className="info">
        <img src="src/assets/images/discounts.png" alt=""/>
      </div>
    </div>
  );
};

export default Categories;

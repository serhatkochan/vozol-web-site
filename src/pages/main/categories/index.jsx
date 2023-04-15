import categories from 'src/assets/data/categories.json'
import {Card} from "antd";
import TranslateHelper from "src/helpers/translateHelper.js";
import {useNavigate} from "react-router-dom";
import Image from "src/components/image/index.jsx";

const Categories = () => {
  const navigate = useNavigate();
  return (
    <div className="categoriesWrapper">
      <div className="info">
        <Image src="images/mng_kargo" />
      </div>
      <div className="cardWrapper info">
        {categories.map((category) => {
          return (
            <Card
              key={category.id}
              hoverable
              cover={<Image src={category.avatar} />}
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
        <Image src="images/discounts" />
      </div>
    </div>
  );
};

export default Categories;

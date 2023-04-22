import categories from 'src/assets/data/categories.json'
import {Card, Tooltip} from "antd";
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
        {categories.filter((categoryItem) => categoryItem.showCategory).map((category) => {
          const categoryName = TranslateHelper.Translate(category.name);
          return (
            <Card
              key={category.id}
              hoverable
              cover={<Image src={category.avatar} preview={false} />}
              onClick={() => navigate(category.to)}
            >
              <Tooltip title={categoryName}>
                <Card.Meta
                  title={categoryName}
                  description={TranslateHelper.FormatTranslate({
                    key: 'there_are_count_product',
                    format: {
                      count: category.productList.length || 0
                    }
                  })}
                />
              </Tooltip>
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

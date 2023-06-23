import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import RecommendItemDetails from "../RecommendItemDetails/RecommendItemDetails";

const ChefRecommends = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const recommendItems = data.filter(
          (item) => item.category === "offered"
        );
        setMenu(recommendItems.slice(0, 3));
      });
  }, []);

  return (
    <div>
      <section>
        <SectionTitle
          subHeading={"---Should Try---"}
          heading={"chef recommends"}
        ></SectionTitle>
        {/* aikhan theke data ta pathai dise */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {menu.map((item) => (
            <RecommendItemDetails
              key={item._id}
              item={item}
            ></RecommendItemDetails>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ChefRecommends;

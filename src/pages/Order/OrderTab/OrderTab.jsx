import FoodCard from "../../../components/SectionTitle/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 justify-center items-center md:justify-center md:items-center lg:justify-center lg:items-center md:mx-auto lg:mx-auto">
        {items.map((item) => (
          <FoodCard key={item._id} item={item}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default OrderTab;

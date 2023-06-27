const FoodCard = ({ item }) => {
  const { name, price, image, recipe } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl text-center">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="  absolute right-6 top-6 bg-black text-white px-4 py-2 rounded-lg">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center ">
        <h2 className="text-2xl font-semibold ">{name}</h2>
        <p>{recipe}</p>
        <div>
          <button className="btn btn-outline border-orange-400 border-0 border-b-4 hover:text-orange-400 mb-20 bg-slate-200 ">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

const MenuItem = ({ item }) => {
  const { image, price, recipe, name } = item;

  return (
    <div className="flex space-x-4">
      <img
        className="w-[100px]"
        style={{ borderRadius: "0 200px 200px 200px" }}
        src={image}
        alt=""
      />
      <div>
        <h3 className="uppercase">{name}-------</h3>
        <p>{recipe}</p>
        <p className="text-yellow-500"> ${price}</p>
      </div>
    </div>
  );
};

export default MenuItem;

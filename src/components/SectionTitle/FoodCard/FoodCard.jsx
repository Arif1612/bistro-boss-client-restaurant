import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, price, image, recipe, _id } = item;
  const { user } = useContext(AuthContext);
  const [,refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        image,
        price,
        email: user.email,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            // console.log("asse");
            refetch();//refetch cart to update the number of items in the cart

            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Food Added on the cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to order the food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

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
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline border-orange-400 border-0 border-b-4 hover:text-orange-400 mb-20 bg-slate-200 "
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

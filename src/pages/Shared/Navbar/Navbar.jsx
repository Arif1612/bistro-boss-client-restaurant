import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart(); //custom hook banaise


  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

 
  const navOptions = (
    <>
      <li className="group hover:bg-red-300 rounded-lg">
        <Link to="/" className="hover:text-white  focus:text-yellow-500 ">
          HOME
        </Link>
      </li>
      <li className=" hover:bg-red-300  rounded-lg ">
        <Link to="/menu" className="hover:text-white focus:text-yellow-500 ">
          OUR MENU
        </Link>
      </li>
      <li className=" hover:bg-red-300  rounded-lg ">
        <Link
          to="/order/salad"
          className="hover:text-white focus:text-yellow-500 "
        >
          ORDER FOOD
        </Link>
      </li>
      <li className=" hover:bg-red-300  rounded-lg ">
        <Link to="/secret" className="hover:text-white focus:text-yellow-500 ">
          Secret
        </Link>
      </li>
      <li className=" hover:bg-red-300  rounded-lg ">
        <Link to="/" className="hover:text-white focus:text-yellow-500 ">
          <button className="btn">
            <FaShoppingCart></FaShoppingCart>
            <div className="badge badge-secondary">+{ cart?.length || 0}</div>
          </button>
        </Link>
      </li>

      {user ? (
        <>
          <li className=" hover:bg-red-300   rounded-lg">
            <div className=" hover:bg-red-300   rounded-lg">
              <div>
                {" "}
                <span>{user?.displayName}</span>
              </div>
              <div>
                {" "}
                <button onClick={handleLogout} className="btn btn-ghost">
                  Signout
                </button>
              </div>
            </div>
          </li>
        </>
      ) : (
        <>
          <li className=" hover:bg-red-300  rounded-lg ">
            <Link
              to="/login"
              className="hover:text-white focus:text-yellow-500 "
            >
              LOGIN
            </Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl  h-24  ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
          >
            {navOptions}
          </ul>
        </div>
        <p>
          <Link
            className="btn btn-ghost normal-case text-2xl font-bold
        "
          >
            <p>
              <span> BISTRO BOSS</span> <br />
              <span className="  text-base font-semibold">
                R E S T A U R A N T
              </span>
            </p>
          </Link>
        </p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        <Link className="btn">Button</Link>
      </div>
    </div>
  );
};

export default Navbar;

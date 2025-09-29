import React, { useContext, useState } from "react";
import { assets } from "../assets/assets.js";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Heart, ShoppingBag } from "lucide-react";
import { AppContext } from "../context/AppContext.jsx";

const Navbar = () => {
  const { navigate, user, setUser, cart, favorite, axios } =
    useContext(AppContext);
  const [open, setOpen] = useState(false);
  //   const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname == path
      ? "text-secondary border-b border-primary"
      : "";
  };

  const logout = () => {};
  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
      <Link>
        <img src={assets.logo} alt="" className="w-42" />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <Link to={"/"} className={isActive("/")}>
          Home
        </Link>
        <Link to={"/shop"} className={isActive("/shop")}>
          Shop
        </Link>
        <Link to={"/about"} className={isActive("/about")}>
          About
        </Link>
        <Link to={"/contact"} className={isActive("/contact")}>
          Contact
        </Link>
        <button
          onClick={() => navigate("/admin")}
          className="bg-primary text-white px-6 py-2 cursor-pointer rounded-full"
        >
          Admin Dashboard
        </button>

        <div
          onClick={() => navigate("/cart")}
          className="relative cursor-pointer"
        >
          <ShoppingBag className="w-5 h-5" />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">
            {cart ? cart.length : 0}
          </button>
        </div>
        <div
          onClick={() => navigate("/wishlist")}
          className="relative cursor-pointer"
        >
          <Heart className="w-5 h-5" />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">
            {favorite ? favorite.length : 0}
          </button>
        </div>
        {/* <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search products"
          />
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.836 10.615 15 14.695"
              stroke="#7A7B7D"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              clip-rule="evenodd"
              d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783"
              stroke="#7A7B7D"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div> */}

        {/* <div className="relative cursor-pointer">
          <svg
            width="18"
            height="18"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0"
              stroke="#615fff"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <button className="absolute -top-2 -right-3 text-xs text-white bg-indigo-500 w-[18px] h-[18px] rounded-full">
            3
          </button>
        </div> */}

        {/* checking user available or not */}
        {user ? (
          <div className="relative group">
            <img
              src={assets.profile_pic}
              alt=""
              className="w-10 h-10 rounded-full cursor-pointer"
            />
            <div className="absolute right-0 mt-2 w-40 bg-secondary shadow-lg rounded-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition duration-300 z-50 ">
              <ul className="text-white">
                <p
                  onClick={() => navigate("/my-orders")}
                  className="cursor-pointer hover:bg-primary py-1px-3"
                >
                  My Orders
                </p>
                <p
                  onClick={logout}
                  className="cursor-pointer hover:bg-primary py-1px-3"
                >
                  Logout
                </p>
              </ul>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="cursor-pointer px-8 py-2 bg-primary hover:bg-secondary transition text-white rounded-full"
          >
            Login
          </button>
        )}
      </div>

      <button
        onClick={() => (open ? setOpen(false) : setOpen(true))}
        aria-label="Menu"
        className="sm:hidden"
      >
        {/* Menu Icon SVG */}
        <svg
          width="21"
          height="15"
          viewBox="0 0 21 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="21" height="1.5" rx=".75" fill="#426287" />
          <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
          <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden z-50`}
      >
        <Link onClick={() => setOpen(false)} to={"/"} className={isActive("/")}>
          Home
        </Link>
        <Link
          onClick={() => setOpen(false)}
          to={"/shop"}
          className={isActive("/shop")}
        >
          Shop
        </Link>
        <Link
          onClick={() => setOpen(false)}
          to={"/about"}
          className={isActive("/about")}
        >
          About
        </Link>
        <Link
          onClick={() => setOpen(false)}
          to={"/contact"}
          className={isActive("/contact")}
        >
          Contact
        </Link>
        <button
          onClick={() => navigate("/admin")}
          className="bg-primary text-white px-4 py-2 cursor-pointer rounded-full"
        >
          Admin Dashboard
        </button>
        {user ? (
          <div className="relative group">
            <img
              src={assets.profile_pic}
              alt=""
              className="w-10 h-10 rounded-full cursor-pointer"
            />
            <div className="absolute right-0 mt-2 w-40 bg-secondary shadow-lg rounded-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition duration-300 z-50 ">
              <ul className="text-white">
                <p
                  onClick={() => navigate("/my-orders")}
                  className="cursor-pointer hover:bg-primary py-1px-3"
                >
                  My Orders
                </p>
                <p
                  onClick={logout}
                  className="cursor-pointer hover:bg-primary py-1px-3"
                >
                  Logout
                </p>
              </ul>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="cursor-pointer px-8 py-2 bg-primary hover:bg-secondary transition text-white rounded-full"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

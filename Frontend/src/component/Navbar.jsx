import React from "react";
import { IoMdMenu } from "react-icons/io";
import { FaCircleXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="bg-white shadow-xl">
        <div className="max-w-7xl mx-auto px-15">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold text-blue-700">ShopEasy</h1>
            <ul className="hidden md:flex gap-8">
              
              <Link to="/"><li className="cursor-pointer hover:text-blue-700">Home</li></Link>
              <Link to="categories">
              <li >Search by Category </li>
              </Link>
              <Link to="Products"><li className="cursor-pointer hover:text-blue-700">Products</li></Link>
              <Link to="AboutUs"><li className="cursor-pointer hover:text-blue-700">About Us</li></Link>
              <Link to="ContactUs"><li className="cursor-pointer hover:text-blue-700">Contact Us</li></Link>
              
              
            </ul>

            <button
              className="md:hidden"
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              {menuOpen ? <FaCircleXmark /> : <IoMdMenu />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="flex justify-end px-5">
            <ul className="">
              <li className="cursor-pointer hover:text-blue-700">Home</li>
              <li className="cursor-pointer hover:text-blue-700">Products</li>
              <li className="cursor-pointer hover:text-blue-700">About Us</li>
              <li className="cursor-pointer hover:text-blue-700">Contact Us</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
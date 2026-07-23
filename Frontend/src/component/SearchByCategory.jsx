import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import categoryImages from "../Data/ImageData";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchByCategory = () => {
  const [categories, setCategories] = useState([]);
  const [loading , setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    axios.get("https://dummyjson.com/products/categories")
    .then((response) => {
      console.log(response.data);
      setCategories(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(()=>{
      setLoading(false)
    });
    
    
  }, []);

  const colors = [
    "bg-red-100",
    "bg-orange-100",
    "bg-amber-100",
    "bg-yellow-100",
    "bg-lime-100",
    "bg-green-100",
    "bg-emerald-100",
    "bg-teal-100",
    "bg-cyan-100",
    "bg-sky-100",
    "bg-blue-100",
    "bg-indigo-100",
    "bg-violet-100",
    "bg-purple-100",
    "bg-fuchsia-100",
    "bg-pink-100",
    "bg-rose-100",
    "bg-slate-100",
    "bg-gray-100",
    "bg-zinc-100",
    "bg-neutral-100",
    "bg-stone-100",
  ];

  const randomColors = colors[Math.floor(Math.random() * colors.length)];
  console.log(randomColors);

  if(loading){
     return (
    <div className="h-screen flex justify-center items-center">
      <h1 className="text-2xl font-bold">Loading...</h1>
    </div>
  );
  }

  return (
    <section className="max-w-7xl mx-auto px-15 py-20">
      <h1 className="text-center text-4xl font-bold">Search By Category</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-5">
        {categories.map((Category , index) => {
          const categoryImage = categoryImages.find((objImg) => {
            return objImg.slug === Category.slug;
          });

          console.log("img url", categoryImage);

          return (
            <div key={Category.slug}
            className="p-6 bg-white shadow-md rounded-3xl border border-gray-100 flex flex-col items-center pt-5 transform transition-transform transition-shadow duration-500 ease-out hover:scale-105 hover:shadow-2xl">
              <div
                className={` ${colors[index % colors.length]} h-20 w-20 mx-auto rounded-full overflow-hidden flex justify-center items-center group-hover:scale-110 transition-all duration-300`}
              >
                <img
                  src={categoryImage.image}
                  alt={Category.name}
                  className="h-[80%] w-[80%] object-cover rounded-full"
                />
              </div>

              <p className="mt-4 font-semibold">{Category.name}</p>
              <p className="text-gray-500 text-sm text-center">
                Lorem ipsum dolor sit amet.
              </p>

              <button className="mt-4 px-3 py-2 rounded-xl bg-black text-white flex items-center justify-center gap-2 group"
              onClick={()=> navigate(`/categories/${Category.name}`)}>
                <span>Explore {Category.name}</span>
                <FaLongArrowAltRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SearchByCategory;
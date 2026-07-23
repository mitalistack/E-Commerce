import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { MdOutlineCurrencyRupee } from "react-icons/md";

const ProductsDetail = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/category/${id}`)
      .then((response) => {
        console.log(response.data.products);
        setProducts(response.data.products);
      });
  }, [id]);

  return (
    <>
      <section className="max-w-7xl mx-auto px-15 py-20">
        <h1 className="text-center text-4xl font-bold">{id} Products</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => {
            return(
              <div
              key={product.id}
              className=" mt-6 shadow-xl rounded-2xl  outline w-60 pb-2"
            >
              <div className=" h-[40%] w-full overflow-hidden bg-gray-100">
                <img
                  src={product.thumbnail}
                  alt=""
                  className="h-[100%] w-[100%] object-fit"
                />
              </div>
              <div className="flex flex-col gap-3">
                <div className="p-2 flex flex-col gap-2">
                  <p className="text-blue-700 text-sm">{product.category}</p>
                  <p className="text-lg font-bold">{product.title}</p>
                  <p className="text-gray-700 text-sm">{product.description}</p>
                  <p className="bg-green-700 text-white text-sm  w-20 rounded-xl flex items-center justify-center gap-1">
                    <FaStar className="text-yellow-400"/>
                    <span>{product.rating}</span>
                  </p>
                  <p className="text-md font-bold flex items-center gap-1">
                    <MdOutlineCurrencyRupee />
                    <span>{product.price}</span>
                  </p>
                </div>

                <div className="flex justify-center gap-3 mt-4">
                  <button className="bg-gray-900 text-white p-2 rounded-xl">
                    Add to Cart
                  </button>
                  <button className="bg-green-700 text-white p-3 rounded-xl">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            )
            
          })}
        </div>
      </section>
    </>
  );
};

export default ProductsDetail;
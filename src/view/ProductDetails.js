import React from "react";
import products from "../products.json";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <>
      <div className="container mx-auto p-4">
        {products &&
          products.map((item,index) => {
            if (item.id === parseInt(id)) {
              return (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" key={index}>
                  <div className="justify-self-center">
                    <img
                      className="rounded-lg h-auto md:h-96 object-cover w-full"
                      src={item.image}
                      alt="product image"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <p className="text-3xl font-bold mb-2">{item.title}</p>
                    <p className="text-2xl text-gray-700 font-bold mb-2">₹{item.price}</p>
                    <p className="text-gray-700 mb-2">
                      <span className="text-lg text-gray-700 font-bold mb-2">Category</span> : {item.category}
                    </p>
                    <p className="text-gray-700 mb-4"><span className="text-lg text-gray-700 font-bold mb-2">Description</span> : {item.description}</p>
                  </div>
                </div>
              );
            }
          })}
      </div>
    </>
  );
};

export default ProductDetails;

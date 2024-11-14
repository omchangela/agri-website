import React from "react";

const ViewProduct = ({ product }) => {
  return (
    <>
    
    <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
      
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-34 object-cover rounded-md mb-4"
      />

      {/* Product Details */}
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
      <p className="text-lg font-semibold text-green-500">{product.price}</p>
      
    </div>
    </>
  );
};

export default ViewProduct;

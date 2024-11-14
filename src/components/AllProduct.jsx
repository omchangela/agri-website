import React from "react";
import { useNavigate } from "react-router-dom";

const ViewProduct = ({ product }) => {
  const navigate = useNavigate();

  // Redirect function
  const handleRedirect = () => {
    navigate(`/product/:id`); //
  };

  return (
    <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-34 object-cover rounded-md mb-4"
      />

      {/* Product Details */}
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
      <p className="text-lg font-semibold text-green-500 mb-4">{product.price}</p>

      {/* View More Info Button */}
      <button
        onClick={handleRedirect}
        className="px-4 py-2 border-2 border-[#0B904E] text-[#0B904E] font-semibold rounded-md hover:bg-[#0B904E] hover:text-white transition-colors duration-300"
      >
        View More Info
      </button>
    </div>
  );
};

export default ViewProduct;

// ViewCategory.jsx
import React from "react";

const ViewCategory = ({ category }) => {
  return (
    <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
      <a href="#">
        {/* Category Image */}
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-34 object-cover rounded-md mb-4"
        />

        {/* Category Name */}
        <h3 className="text-large font-semibold text-gray-800 mb-2">{category.name}</h3>
      </a>
    </div>
  );
};

export default ViewCategory;

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageSlider from '../components/ImageSlider';
import category1 from "../assets/categoriesImg/category1.png";
import category2 from "../assets/categoriesImg/category2.png";

import ViewCategory from "../components/ViewCategory";
const ShowAll = () => {
    const categories = [
        { image: category1, name: "Fertilizers" },
        { image: category2, name: "Pesticides" },
        { image: category1, name: "Seeds" },
        { image: category2, name: "Hybrid Seeds" },
        { image: category1, name: "Spray Machinery" },
        { image: category2, name: "Kitchen Gardening" },
        { image: category1, name: "Tunnel Farming" },
        { image: category2, name: "Livestock install" },
        { image: category1, name: "Automatic Irrigation" },
        { image: category2, name: "Household Products" },
        { image: category1, name: "Home Decor" },
        { image: category2, name: "Agricultural Tools" },
        { image: category1, name: "Tunnel Farming" },
        { image: category2, name: "Livestock install" },
        { image: category1, name: "Automatic Irrigation" },
        { image: category2, name: "Household Products" },
        { image: category1, name: "Home Decor" },
        { image: category2, name: "Agricultural Tools" },
        
      ];
  return (
    <>
      <Navbar />
      <ImageSlider />
      {/* View Categories Heading */}
      <div className="flex justify-between items-center mt-6 px-4 mx-10">
        <h2 className="text-2xl font-bold">Categories</h2>
      </div>

      {/* Category Display */}
      <div style={{ backgroundColor: '#DBE4F3' }} className="grid mx-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-6 mt-6 p-4">
        {categories.map((category, index) => (
          <ViewCategory key={index} category={category} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default ShowAll;

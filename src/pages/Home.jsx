// Home.jsx
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { useNavigate } from "react-router-dom";
import ViewProduct from "../components/ViewProduct";
import ViewCategory from "../components/ViewCategory";
import AllProduct from "../components/AllProduct"
import product1 from "../assets/productImg/product1.png";
import product2 from "../assets/productImg/product2.png";
import product3 from "../assets/productImg/product3.png";
import product4 from "../assets/productImg/product3.png";
import product5 from "../assets/productImg/product5.png";
import product6 from "../assets/productImg/product6.png";
import category1 from "../assets/categoriesImg/category1.png";
import category2 from "../assets/categoriesImg/category2.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ImageSlider from "../components/ImageSlider";

function Home() {
  const products = [
    { image: product1, name: "Grozin Zinc...", price: "₹999" },
    { image: product2, name: "Sona Boron...", price: "₹1499" },
    { image: product3, name: "Sindax 350ml +...", price: "₹1999" },
    { image: product4, name: "Vita-can...", price: "₹2499" },
    { image: product5, name: "Organics 77...", price: "₹2999" },
    { image: product6, name: "Bulat Herbicide...", price: "₹3499" },
  ];
  const allproducts = [
    { image: product1, name: "Grozin Zinc...", price: "₹999" },
    { image: product2, name: "Sona Boron...", price: "₹1499" },
    { image: product3, name: "Sindax 350ml +...", price: "₹1999" },
    { image: product4, name: "Vita-can...", price: "₹2499" },
    { image: product5, name: "Organics 77...", price: "₹2999" },
    { image: product6, name: "Bulat Herbicide...", price: "₹3499" },
    { image: product1, name: "Grozin Zinc...", price: "₹999" },
    { image: product2, name: "Sona Boron...", price: "₹1499" },
    { image: product3, name: "Sindax 350ml +...", price: "₹1999" },
    { image: product4, name: "Vita-can...", price: "₹2499" },
    { image: product5, name: "Organics 77...", price: "₹2999" },
    { image: product6, name: "Bulat Herbicide...", price: "₹3499" },{ image: product1, name: "Grozin Zinc...", price: "₹999" },
    { image: product2, name: "Sona Boron...", price: "₹1499" },
    { image: product3, name: "Sindax 350ml +...", price: "₹1999" },
    { image: product4, name: "Vita-can...", price: "₹2499" },
    { image: product5, name: "Organics 77...", price: "₹2999" },
    { image: product6, name: "Bulat Herbicide...", price: "₹3499" },{ image: product1, name: "Grozin Zinc...", price: "₹999" },
    { image: product2, name: "Sona Boron...", price: "₹1499" },
    { image: product3, name: "Sindax 350ml +...", price: "₹1999" },
    { image: product4, name: "Vita-can...", price: "₹2499" },
    { image: product5, name: "Organics 77...", price: "₹2999" },
    { image: product6, name: "Bulat Herbicide...", price: "₹3499" },
  ];
  const categories = [
    { image: category1, name: "Fertilizers" },
    { image: category2, name: "Pesticides" },
    { image: category2, name: "Seeds" },
    { image: category2, name: "Hybrid Seeds" },
    { image: category2, name: "Spray Machinery" },
    { image: category2, name: "Kitchen Gardening" },
    { image: category2, name: "Tunnel Farming" },
    { image: category2, name: "Livestock install" },
    { image: category2, name: "Automatic Irrigation" },
    { image: category2, name: "Household Products" },
    { image: category2, name: "Home Decor" },
    { image: category2, name: "Agricultural Tools" },
    
  ];

  const navigate = useNavigate();

  // Click handler for redirecting to showall page
  const handleViewAllClick = () => {
    navigate("/allproduct");
  };
  const handleViewCategory = () => {
    navigate("/allcategories");
  };

  return (
    <div className="container-fluid mx-auto">
      <Navbar />

      <ImageSlider />

      {/* View Product and View More Heading */}
      <div className="flex justify-between items-center mt-6 px-4 mx-10">
        <h2 className="text-2xl font-bold">View Product</h2>
        <h5 className="text-lg font-semibold text-blue-500 cursor-pointer">View More</h5>
      </div>

      {/* Product Display */}
      <div style={{ backgroundColor: '#DBE4F3' }} className="grid mx-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-6 mt-6 p-4">
        {products.map((product, index) => (
          <ViewProduct key={index} product={product} />
        ))}
      </div>

      {/* View Categories Heading */}
      <div className="flex justify-between items-center mt-6 px-4 mx-10">
        <h2 className="text-2xl font-bold">Categories</h2>
        <h5 className="text-lg font-semibold text-blue-500 cursor-pointer" onClick={handleViewCategory}>View More</h5>
      </div>

      {/* Category Display */}
      <div style={{ backgroundColor: '#DBE4F3' }} className="grid mx-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-6 mt-6 p-4">
        {categories.map((category, index) => (
          <ViewCategory key={index} category={category} />
        ))}
      </div>

      {/* View Product and View More Heading */}
      <div className="flex justify-between items-center mt-6 px-4 mx-10">
        <h2 className="text-2xl font-bold">All Product</h2>
        <h5 className="text-lg font-semibold text-blue-500 cursor-pointer" onClick={handleViewAllClick}>View All</h5>
      </div>

      {/* Product Display */}
      <div style={{ backgroundColor: '#DBE4F3' }} className="grid mx-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-6 mt-6 p-4">
        {allproducts.map((product, index) => (
          <AllProduct key={index} product={product} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;

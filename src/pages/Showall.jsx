import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AllProduct from '../components/AllProduct';
import product1 from "../assets/productImg/product1.png";
import product2 from "../assets/productImg/product2.png";
import product3 from "../assets/productImg/product3.png";
import product4 from "../assets/productImg/product3.png";
import product5 from "../assets/productImg/product5.png";
import product6 from "../assets/productImg/product6.png";
import ImageSlider from '../components/ImageSlider';
import BrandsList from '../components/Brandslist';

const ShowAll = () => {
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
    { image: product6, name: "Bulat Herbicide...", price: "₹3499" },
    { image: product1, name: "Grozin Zinc...", price: "₹999" },
    { image: product2, name: "Sona Boron...", price: "₹1499" },
    { image: product3, name: "Sindax 350ml +...", price: "₹1999" },
    { image: product4, name: "Vita-can...", price: "₹2499" },
    { image: product5, name: "Organics 77...", price: "₹2999" },
    { image: product6, name: "Bulat Herbicide...", price: "₹3499" },
    { image: product1, name: "Grozin Zinc...", price: "₹999" },
    { image: product2, name: "Sona Boron...", price: "₹1499" },
  ];

  return (
    <>
      <Navbar />
      <ImageSlider />
      <BrandsList />
      <div className="container mx-auto p-8 ">
        <h2 className="text-2xl font-bold mt-6 mx-20">All Products</h2>
        
        {/* Product Display */}
        <div className="grid mx-10 p-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          {allproducts.map((product, index) => (
            <AllProduct key={index} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ShowAll;

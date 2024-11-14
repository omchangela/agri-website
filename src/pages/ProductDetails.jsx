import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import mainimg from '../assets/categoriesImg/category3.png';
import img1 from '../assets/categoriesImg/category1.png';
import img2 from '../assets/categoriesImg/category2.png';

function ProductDetails() {
  const { id } = useParams();  // Get product ID from URL params
  
  return (
    <div className="container mx-auto px-4">
      <Navbar />
      
      {/* Product Section */}
      <div className="text-left my-8">
        {/* Large Product Image */}
        <div className="flex justify-center mb-8">
          <img
            src={mainimg} // Replace with actual product image URL
            alt="Product"
            className="w-full md:w-2/5 lg:w-1/4 rounded-lg"
          />
        </div>

        {/* 4 Small Product Images */}
        <div className="flex justify-center space-x-4 mb-8 overflow-x-auto">
          <img src={img1} alt="Small Product 1" className="w-24 h-24 object-cover rounded-lg" />
          <img src={img2} alt="Small Product 2" className="w-24 h-24 object-cover rounded-lg" />
          <img src={img1} alt="Small Product 3" className="w-24 h-24 object-cover rounded-lg" />
          <img src={img2} alt="Small Product 4" className="w-24 h-24 object-cover rounded-lg" />
        </div>
        
        {/* Product Title and Details */}
        <div className="my-6">
          <h2 className="text-center md:text-left text-lg md:text-xl md:text-center md:px-20 md:mx-20 font-bold">
            Manual Hand Sprayer Machine 1pack Brand: National Sprayer
            Fst Agriculture Pesticide And Fumigation Spray Machine
            Hand Sprayer Orange Handle Sprayer Knapsack Spray Machine
          </h2>
        </div>

        {/* Product Description */}
        <div className="my-6">
          <h2 className="font-bold text-lg">Description</h2>
          <p className="text-base text-black-700 mt-4">
            12L stainless steel pump sprayer / garden sprayer / supporting dada 1pc سپرے مشین
          </p>
          <p className="text-base text-black-700 mt-2">
            Material: Stainless steel 304 + brass dada
          </p>
          <p className="text-base text-black-700 mt-2">
            Trigger: Plastic + brass
          </p>
          <p className="text-base text-black-700 mt-2">
            Lance: Brass with stainless steel, soldered on both ends
          </p>
          <p className="text-base text-black-700 mt-2">
            Working pressure: 2-3 kgs/cm²
          </p>
          <p className="text-base text-black-700 mt-2">
            Package: 6 pcs/carton
          </p>
          <p className="text-base text-black-700 mt-2">
            Dimension: 22*22*78 cm
          </p>
        </div>

        {/* Product Features */}
        <div className="my-6">
          <h2 className="font-bold text-lg">Feature</h2>
          <p className="text-base text-black-700 mt-4">
            Used for garden spraying, pest control, sterilization, agricultural irrigation, and environment protection applications in all public places.
          </p>
          <p className="text-base text-black-700 mt-2">
            2. Chemically resistant seals, bright stainless steel tank made of high-quality #304 stainless steel.
          </p>
          <p className="text-base text-black-700 mt-2">
            3. Comes with adjustable nozzles / soft strap.
          </p>
          <p className="text-base text-black-700 mt-2">
            4. Assembled with pressure gauge to check the pressure inside the tank.
          </p>
          <p className="text-base text-black-700 mt-2">
            The 12L stainless steel pump sprayer / garden sprayer / supporting dada 1pc pest control is a product of Vellgo International.
            <br /> The category is spray machinery and the subcategory is manual spray machine.
          </p>
        </div>

        {/* WhatsApp Button */}
        <div className="flex justify-center mt-6">
          <a 
            href="https://wa.me/9723554357" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[#0B904E] text-white text-center text-lg font-bold py-3 px-8 rounded-full shadow-md w-full sm:w-3/4 md:w-1/2 lg:w-1/3"
          >
            For Best Price Click Now WhatsApp
          </a>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default ProductDetails;

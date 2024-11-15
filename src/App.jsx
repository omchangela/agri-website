import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductDetails from './pages/ProductDetails';
import Categories from './pages/Categories';
import Profile from './pages/Profile';
import UpdateProfile from './pages/UpdateProfile';
import Showall from './pages/Showall';
import AllCategory from './pages/AllCategory'
import FAQ from './components/FAQ';
import UpdatePassword from './pages/UpdatePassword';
import Setting from './pages/Setting';
import About from './pages/About';
function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/allproduct" element={<Showall />} />
        <Route path="/allcategories" element={<AllCategory />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/update-profile" element={<UpdateProfile />} />
        <Route path="/fnq" element={<FAQ />} />
        <Route path="/settings" element={<Setting />} />
        <Route path="/about" element={<About />} />
        
        <Route path="/updatepassword" element={<UpdatePassword />} />
      </Routes>
    </Router>
  );
}

export default App;

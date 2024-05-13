// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Aboutus from './components/Aboutus';
import Searchpage from './components/Searchpage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
      <Navbar />
        <Routes>
          {/* Route to the home page */}
          <Route path="/" element={<Home />} />

          {/* Route to the Navbar component */}
          <Route path="/navbar" element={<Navbar />} />

          {/* Route to the Product component */}
          <Route path="/products" element={<Products />} />

          <Route path="/products/:id" element={<Product />} />

          <Route path="/cart" element={<Cart/>} />

          <Route path="/contact" element={<Contact/>} />

          <Route path="/about" element={<Aboutus/>} />

          <Route path="/Search" element={<Searchpage/>} />


        </Routes>
        <Footer/>
        {/* Navbar component rendered outside of the Routes */}
        
      </div>
    </BrowserRouter>
  );
}

export default App;

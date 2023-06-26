import "./App.css";
import Header from "./components/Header";
import Home from "./modules/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Product from "./modules/Product";
import Products from "./modules/Products";
import CategoriesProducts from "./modules/CategoriesProducts";
import Cart from "./modules/Cart";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories/:name" element={<CategoriesProducts />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

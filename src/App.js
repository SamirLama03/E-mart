import "./App.css";
import Header from "./components/Header";
import Home from "./modules/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Product from "./modules/Product";
import Products from "./modules/Products";
import CategoriesProducts from "./modules/CategoriesProducts";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories/:name" element={<CategoriesProducts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

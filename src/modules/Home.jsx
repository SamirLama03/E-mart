import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Products from "../components/ProductsCard";
import FeaturesCard from "../components/FeaturesCard";
import StatCard from "../components/StatCard";
import Footer from "../components/Footer";
import ProductsCard from "../components/ProductsCard";
import Categories from "../components/Categories";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products?limit=16"
      );
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Hero />

      <div className="flex flex-col text-center w-full mt-12">
        <h2 className="text-xs text-green-500 tracking-widest font-medium title-font mb-1">
          PRODUCTS
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          MOST POPULAR PRODUCTS
        </h1>
      </div>
      {products.length > 0 ? (
        <ProductsCard products={products} />
      ) : (
        <div>Loading....</div>
      )}
      <Products />
      <Categories />
    </>
  );
};

export default Home;

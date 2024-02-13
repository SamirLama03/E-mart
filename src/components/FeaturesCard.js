import React from "react";
import { Link } from "react-router-dom";

const FeaturesCard = ({ cards = [1, 2, 3] }) => {
  const getCategoryDescription = (category) => {
    switch (category) {
      case "men's clothing":
        return "Explore our collection of stylish men's clothing, including shirts, pants, jackets, and more.";
      case "women's clothing":
        return "Discover the latest trends in women's fashion, from dresses and skirts to tops and accessories.";
      case "electronics":
        return "Find the newest gadgets and electronics, from smartphones and laptops to cameras and headphones.";
      default:
        return "Learn more about our high quality jewellery and authentic products available on E-mart.";
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-green-500 tracking-widest font-medium title-font mb-1"></h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            Categories
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {cards?.map((card) => {
            const category = typeof card === "string" ? card : "Example Card";
            const description = getCategoryDescription(category);
            return (
              <Link
                key={category}
                to={`/categories/${category}`}
                className="p-4 md:w-1/3 cursor-pointer"
              >
                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                      {category}
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">{description}</p>
                    <a className="mt-3 text-green-500 inline-flex items-center">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesCard;

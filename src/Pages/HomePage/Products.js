import React, { useEffect } from "react";
import ProductCard from "../ProductCard";
import AOS from "aos";
import "aos/dist/aos.css";

const Products = () => {
  const topProducts = [
    {
      name: "Premium Quality Single Sofa",
      category: " Single Sofa",
      price: "49,999",
      image: "/assets/category/hom15.jpg",
    },
    {
      name: "Premium Quality Single Sofa",
      category: " Single Sofa",
      price: "19,999",
      image: "/assets/category/hom17.jpg",
    },
    {
      name: "Premium Quality Single Sofa",
      category: " Single Sofa",
      price: "15,499",
      image: "/assets/category/hom18.jpg",
    },
    {
      name: "Premium Quality Single Sofa",
      category: " Single Sofa",
      price: "34,999",
      image: "/assets/category/hom19.jpg",
    },
    {
      name: "Premium Quality Single Sofa",
      category:  " Single Sofa",
      price: "19,999",
      image: "/assets/category/hom20.jpg",
    },
    {
      name: "Premium Quality Single Sofa",
      category: "Single Sofa",
      price: "15,499",
      image: "/assets/category/hom21.jpg",
    },
    {
      name: "Premium Quality Single Sofa",
      category: "Single Sofa",
      price: "34,999",
      image: "/assets/category/hom22.jpg",
    },
    {
      name: "Premium Quality Single Sofa",
      category: "Single Sofa",
      price: "49,999",
      image: "/assets/category/hom23.jpg",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // animations variety
  const animations = ["fade-up", "fade-right", "fade-left", "zoom-in"];

  return (
    <section className="top-sellings-section">
      <h2 className="section-title" data-aos="fade-up">
        Our Products
      </h2>
      <div className="top-sellings-grid">
        {topProducts.map((product, index) => (
          <div
            key={index}
            data-aos={animations[index % animations.length]}
            data-aos-delay={(index % 4) * 150} // stagger per row
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;

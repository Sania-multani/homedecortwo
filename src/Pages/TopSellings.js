import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import AOS from "aos";
import "aos/dist/aos.css";

const TopSellings = () => {
  const topProducts = [
    {
      name: "Wooden Chair",
      category: "Chair",
      price: "50000",
      image: "/assets/category/hom10.jpg",
    },
    {
      name: "Wooden Chair",
      category: "Chair",
      price: "19,999",
      image: "/assets/category/hom11.jpg",
    },
    {
      name: "Wooden Chair",
      category: "Chair",
      price: "15,499",
      image: "/assets/category/hom12.jpg",
    },
    {
      name: "Wooden Chair",
      category: "Chair",
      price: "34,999",
      image: "/assets/category/hom13.jpg",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const animations = ["fade-right", "fade-left", "zoom-in", "flip-up"];

  return (
    <section className="top-sellings-section">
      <h2 className="section-title" data-aos="fade-up">
        Top Sellings
      </h2>
      <div className="top-sellings-grid">
        {topProducts.map((product, index) => (
          <div
            key={index}
            data-aos={animations[index % animations.length]}
            data-aos-delay={index * 200} 
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopSellings;

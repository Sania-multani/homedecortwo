import React from "react";
import ProductCard from "../ProductCard";
 

const TopSellings = () => {
  const topProducts = [
    {
      name: "Diamond Necklace",
      category: "Necklace",
      price: "5000",
      image: "/assets/category/hom10.jpg"
    },
    {
      name: "Gold Earrings",
      category: "Earrings",
      price: "19,999",
      image: "/assets/category/catg18.png"
    },
    {
      name: "Emerald Ring",
      category: "Ring",
      price: "15,499",
      image: "/assets/category/cate04.png"
    },
    {
      name: "Platinum Bracelet",
      category: "Bracelet",
      price: "34,999",
      image: "/assets/category/bangles01.png"
    }
  ];

  return (
    <section className="top-sellings-section">
      <h2 className="section-title">Top Selling</h2>
      <div className="top-sellings-grid">
        {topProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
          
        ))}
      </div>
    </section>
  );
};

export default TopSellings;

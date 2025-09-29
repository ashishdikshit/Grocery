import React from "react";
import Hero from "../componants/Hero";
import Category from "../componants/Category";
import Products from "../componants/Products";
import CallToAction from "../componants/CallToAction";
import Blogs from "../componants/Blog";
import Brands from "../componants/Brands";
import NewsLetter from "../componants/NewsLetter";

const Home = () => {
  return (
    <div>
      <Hero />
      <Category />
      <Products />
      <CallToAction />
      <Blogs />
      <Brands />
      <NewsLetter />
    </div>
  );
};

export default Home;

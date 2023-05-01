import React from "react";
import {
  Hero,
  Management,
  Footer,
  Company,
  Product,
  ProductPicture,
  SupportMaintananceSection,
  BlogPost,
} from "../components";

const Home = () => {
  return (
    <>
      {/* Hero  */}
      <Hero />
      {/* Company */}
      <Company />
      {/* Management */}
      <Management />
      {/* Product */}
      <Product />
      <ProductPicture />
      {/* End */}
      {/* Support & maintenance Section */}
      <SupportMaintananceSection />
      {/* Blog */}
      <BlogPost />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;

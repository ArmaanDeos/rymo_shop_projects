import React from "react";
import Banner from "../../components/heroSection/Banner";
import WorkProcess from "../../components/howWeWork/WorkProcess";
import ShopCategory from "../../components/shopByCategory/ShopCategory";
import FeaturedProduct from "../../components/productList/FeaturedProduct";
import Offer from "../../components/Offers/Offer";
import RecentProduct from "../../components/recentProducts/RecentProduct";
import Clients from "../../components/Clients/Clients";
import Footer from "../../components/Footer/Footer";
import BackToTop from "../../components/BackToTop/BackToTop";

const Home = () => {
  return (
    <>
      <Banner />
      <WorkProcess />
      <ShopCategory />
      <FeaturedProduct />
      <Offer />
      <RecentProduct />
      <Clients />
      <Footer />
      <BackToTop />
    </>
  );
};

export default Home;

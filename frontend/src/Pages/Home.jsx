import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import FAQS from "../Components/main/FAQS";
import New from "../Components/main/New";
import Trophy from "../Components/main/Trophy";
import Trending from "../Components/main/Trending";


function Home() {
  return <div>
    <Navbar/>
    <Trending/>
    <Trophy/>
    <New/>
    <FAQS/>
    <Footer/>
  </div>;
}

export default Home;

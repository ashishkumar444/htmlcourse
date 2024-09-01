import React from "react";
import Navbar from "../Components/Navbar";
import CartPage from "../Components/CartPage";
import Footer from "../Components/Footer";
import SinglePageHeader from "../Components/SinglePageHeader";
import SingleProduct from "../Components/SingleProduct";
function Shopdetail() {
  return (
    <>
      {/* navbar */}
      <Navbar />
      <SinglePageHeader one={{title:"Shop Detail"}}/>
      {/* <h1>Shop detail</h1> */}
      <SingleProduct/>
      <Footer />
    </>
  );
}

export default Shopdetail;

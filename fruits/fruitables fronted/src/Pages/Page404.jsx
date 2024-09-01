import React from "react";
import Navbar from "../Components/Navbar";
import CartPage from "../Components/CartPage";
import Footer from "../Components/Footer";
import SinglePageHeader from "../Components/SinglePageHeader";
import Page411 from "../Components/Page411"
function Page404() {
  return (
    <>
      {/* navbar */}
      <Navbar />
      <SinglePageHeader one={{title:"404 Error"}}/>
      {/* <h1>404</h1> */}
      <Page411/>
      <Footer />
    </>
  );
}

export default Page404;

import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

function Layout(props) {
  return (
    <>
      <Header />
      <Nav />
      <main>{props.children}</main>

      <Footer />
    </>
  );
}

export default Layout;

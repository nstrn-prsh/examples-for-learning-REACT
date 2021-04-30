import React from "react";
import Nav from "./Navbar";
import Footer from "./Footer";
import Main from "./Main/Main";
import "./css/templatemo_style.css";
import "./css/font-awesome.min.css";
import "./css/bootstrap.min.css";

const Layout = ({ children }) => {
     return (
          <>
               <Nav />
               <Main>{children}</Main>
               <Footer />
          </>
     );
};

export default Layout;

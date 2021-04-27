import React from "react";
import Nav from "./../Navbar";
import Footer from "./../Footer";
import "./../css/templatemo_style.css";
import "./../css/font-awesome.min.css";
import './../css/bootstrap.min.css'
import Main from './../Main/Main';

const Page = () => {
     return (
          <>
               <Nav />
               <Main/>
               <Footer />
          </>
     );
};

export default Page;

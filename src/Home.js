import React from 'react'
import Navbar from "./navbar";
import Header from './Header';
import Learnwithus from './learnwithus';
import Nutrition from './Nutrition';
import Tools from './Tools';
import Footer from './Footer';
import {NavLink} from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Learnwithus />
      <Nutrition />
      <Tools />
      <Footer />
      
    </>
  );
}

export default Home
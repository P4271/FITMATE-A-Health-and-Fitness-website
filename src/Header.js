import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>

      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start">
              <h2 className="center">Start your Fitness journey with us</h2>
              <h1 className="display-2">Be healthy and learn <br /> <span className="changecontent"></span></h1>
              <p className="main-hero-para">
                Track your calories, learn about diet and exercises,
                <br /> Learn about health and live longer
              </p>
              
              <div className="input-group mt-3">
                
                <button className="input-group-button d-flex justify-content-center align-item-center">
                 <NavLink to="/workout"> Explore more</NavLink></button>
              </div>
            </div>
            {/* --------------main header------------- */}
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
              <img src="./images/herobg.jpg" alt="heroimg" className="img-fluid" />
              <img
                src="./images/yoga2.png"
                alt="heroimg4"
                className="img-fluid main-hero-img2"
              />
            </div>
          </div>
        </section>
      </header>  
    </>
  );
};

export default Header;

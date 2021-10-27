import React from "react";
import {NavLink} from "react-router-dom";
import Navbar from "../navbar";
import Footer from "../Footer";
import { SidebarBackdata, SidebarChestdata } from "../SidebarChestdata";

const WeightTraining = () => {
  return (
    <>
      <Navbar />
      <div className="pageheader">
      <h1 className="main-header text-center mt-5 mb-5 text-capitalize weighttrainingheader">weight training</h1>
      </div>
      <p className="text-center weighttrainingpara">Find all the weight training exercises according to the muscle groups</p>
      <div className="container weighttrainingcontainer">
        <div className="row">
          <div className="col">
            <div className="card weightcard">
              <img src="images/ChestMuscle.jpg" className="card-img-top" alt="..." height="400px" width="250px"/>
              <div className="card-body">
                <h5 className="card-title">Chest</h5>
                <p className="main-hero-para">
                 Find all weight training exercises for Pectoral muscles (chest)
                </p>
                <NavLink to="/chesttraining" className="btn btn-style btn-style-border">
                  view
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card weightcard">
              <img src="images/BackMuscle.jpg" className="card-img-top" alt="..." height="400px" width="250px" />
              <div className="card-body">
                <h5 className="card-title">Back</h5>
                <p className="main-hero-para">
                Find all weight training exercises for back muscles
                </p>
                <NavLink to="/backtraining" className="btn btn-style btn-style-border">
                  view
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card weightcard">
              <img src="images/ShoulderMuscle.png" className="card-img-top" alt="..." height="400px" width="250px" />
              <div className="card-body">
                <h5 className="card-title">Shoulder</h5>
                <p className="main-hero-para">
                Find all weight training exercises for deltoids (shoulders)
                </p>
                <NavLink to="/shouldertraining" className="btn btn-style btn-style-border">
                  view
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container weighttrainingcontainer">
        <div className="row">
          <div className="col">
            <div className="card weightcard">
              <img src="images/AbsMuscle.jpg" className="card-img-top" alt="..." height="400px" width="250px" />
              <div className="card-body">
                <h5 className="card-title">Abs</h5>
                <p className="main-hero-para">
                Find all weight training exercises for core muscles (Abs)
                </p>
                <NavLink to="/abstraining" className="btn btn-style btn-style-border">
                  view
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card weightcard">
              <img src="images/BicepsMuscle.jpg" className="card-img-top" alt="..." height="400px" width="250px" />
              <div className="card-body">
                <h5 className="card-title">Biceps</h5>
                <p className="main-hero-para">
                Find all weight training exercises for your bicep muscles
                </p>
                <NavLink to="/bicepstraining" className="btn btn-style btn-style-border">
                  view
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card weightcard">
              <img src="images/TricepsMuscle.jpg" className="card-img-top" alt="..." height="400px" width="250px" />
              <div className="card-body">
                <h5 className="card-title">Triceps</h5>
                <p className="main-hero-para">
                Find all weight training exercises for your triceps muscle
                </p>
                <NavLink to="/tricepstraining" className="btn btn-style btn-style-border">
                  view
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container weighttrainingcontainer">
        <div className="row">
          <div className="col">
            <div className="card weightcard">
              <img src="images/ForearmsMuscle2.jpeg" className="card-img-top" alt="..."  height="400px" width="250px"/>
              <div className="card-body">
                <h5 className="card-title">Forearms</h5>
                <p className="main-hero-para">
                Find all weight training exercises for Pforearms
                </p>
                <NavLink to="/forearmstraining" className="btn btn-style btn-style-border">
                  view
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card weightcard">
              <img src="images/LegsMuscle2.jpg" className="card-img-top" alt="..." height="400px" width="250px"/>
              <div className="card-body">
                <h5 className="card-title">Legs</h5>
                <p className="main-hero-para">
                Find all weight training exercises for all leg muscles
                </p>
                <NavLink to="/legstraining" className="btn btn-style btn-style-border">
                  view
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card weightcard">
              <img src="images/Calvesmuscle.jpg" className="card-img-top" alt="..." height="400px" width="250px" />
              <div className="card-body">
                <h5 className="card-title">Calfs</h5>
                <p className="main-hero-para">
                Find all weight training exercises for your calves
                </p>
                <NavLink to="/calvestraining" className="btn btn-style btn-style-border">
                  view
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div> 

      <Footer />
    </>
  );
};

export default WeightTraining;

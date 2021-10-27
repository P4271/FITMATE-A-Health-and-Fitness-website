import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import howToUseApp from "./API/howToUse.js";
import healthCare from './API/healthApi.js';

const Nutrition = () => {
     const [aboutData, setAboutData] = useState(howToUseApp);
     const [health, setHealth] = useState(healthCare);
     

    return (
        <>
          <section className="common-section our-services ">
              <div className="container mb-5">
                  <div className="row">
                      <div className="col-12 col-lg-5 text-center our-service-leftside-img">
                          <img src="./images/Nutrition.jpg" alt="Nutritionimage" />
                      </div>
                        
                        {/* -----------1st section rightside data----------- */}
                        <div className="col-12 col-lg-7 our-services-list">
                            <h1 className="main-heading"><span id="red">Nutrition is</span> the Key !</h1>

                            {aboutData.map((curElem) => {
                                const {id, title, info} = curElem;
                                return ( <> 
                                <div className="row our-services-info" key={id}>
                                <div className="col-1 our-services-number">{id}</div>
                                <div className="col-10 our-services-data">
                                    <h2>{title}</h2>
                                    <p className="main-hero-para">
                                        {info}
                                    </p>
                                </div>
                            </div>
                                </> )
                            })}
                            
                            <br />
                            <NavLink to="/food">

                            <button className="btn-style btn-style-border">Learn more</button>
                            </NavLink>
                        </div>
                  </div>
              </div>
        </section>  

        {/* -----2nd part--------- */}

        <section className="common-section our-services our-services-rightside">
              <div className="container mb-5">
                  <div className="row">
                     
                        
                        {/* -----------1st section rightside data----------- */}
                        <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column">
                            <h1 className="main-heading"><span id="red">Health</span> care</h1>

                            {health.map((curElem) => {
                                const {id, title, info} = curElem;
                                return ( <> 
                                <div className="row our-services-info" key={id}>
                                <div className="col-1 our-services-number">{id}</div>
                                <div className="col-10 our-services-data">
                                    <h2>{title}</h2>
                                    <p className="main-hero-para">
                                        {info}
                                    </p>
                                </div>
                            </div>
                                </> )
                            })}
                            
                            <br />
                            <NavLink to="/learn">

                            <button className="btn-style btn-style-border">Learn more</button>
                            </NavLink>
                        </div>

                        <div className="col-12 col-lg-5 our-service-rightside-img">
                          <img src="./images/musclepain.jpg" alt="Nutritionimage" />
                      </div>
                  </div>
              </div>
        </section> 
        </>
    )
}

export default Nutrition;

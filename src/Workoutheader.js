import React from 'react'
import {NavLink} from "react-router-dom";

const Workoutheader = () => {
    return (
        <>
           <header className="workout-header">
               <section className="workout-sub-header">
                 
                   <h1 className="text-center my-5"> WORKOUTS</h1>

                   <div className="container">
                      <div className="row">
                        <div className="col">
                          
                        <div className="card" >
                           <img src="images/exercise.jpg" className="card-img-top" alt="..." />
                           <div className="card-body">
                             <h5 className="card-title"> Weight training</h5>
                             <p className="card-text">find various weight training exercises according to muscle groups</p>
                             <NavLink to="/weighttraining" className="btn  btn-style">Explore</NavLink>
                           </div>
                         </div>
                        </div>

                        <div className="col">                         
                        <div className="card">
                            <img src="images/yoga2.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                              <h5 className="card-title">Yoga</h5>
                              <p className="card-text">Learn various types of yoga forms and types of  meditation</p>
                              <NavLink to="/yoga" className="btn  btn-style">Explore</NavLink>
                            </div>
                          </div>
                        </div>

                        <div className="col">
                        <div className="card">
                            <img src="images/cardio-2.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                              <h5 className="card-title">Cardio</h5>
                              <p className="card-text">Learn about cardiac health and all types of  cardio exercises</p>
                              <NavLink to="/cardio" className="btn  btn-style">Explore</NavLink>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  
               </section>
               </header> 
        </>
    )
}

export default Workoutheader

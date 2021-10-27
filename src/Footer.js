import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <>
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-10 mx-auto">
                        <div className="row">
                            <div className="col-6 col-lg-3">
                                <h2><span id="red">Fitmate</span></h2>
                                <ul>
                                    <li>
                                        <NavLink to="/workout">Workout</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/food">Nutrition</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/tools">Tools</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/learn">Learn</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-lg-3">
                                <h2>Workout</h2>
                                <ul>
                                    <li>
                                        <NavLink to="/ChestTraining">Chest workout</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/ShoulderTraining">Shoulder workout</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/Yoga">Yoga</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/Cardio">Cardio</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-lg-3">
                                <h2>Tools</h2>
                                <ul>
                                    <li>
                                        <NavLink to="/ToolsCaloriecalculator">Calories</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/ToolsMacroscalculator">Macros</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/ToolsBmicalculator">BMI</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/ToolsBmrcalculator">BMR</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-lg-3">
                                <h2>Follow Us</h2>
                                <div className="row">
                                    <div className="col-3 mx-auto">
                                        <a href="https://www.instagram.com/pratikk_42/"> <i className="fab fa-instagram fontawesome-style"></i> </a>
                                    </div>
                                    <div className="col-3 mx-auto">
                                        <a href="https://www.facebook.com/pratik.kante.7"> <i className="fab fa-facebook-f fontawesome-style"></i> </a>
                                    </div>
                                    <div className="col-3 mx-auto">
                                        <a href="https://github.com/"> <i className="fab fa-github fontawesome-style"></i> </a>
                                    </div>
                                    <div className="col-3 mx-auto">
                                        <a href="https://www.dmce.ac.in/"> <i className="fas fa-university fontawesome-style"></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr />
                        <div className="mt-s">
                            <p className="main-hero-para text-center w-100">copyright @ 2021 Fitmate. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
            
        </>
    )
}

export default Footer

import React, {useState} from 'react'
import toolapi from "./API/toolApi.js";
import {NavLink} from "react-router-dom";

const Tools = () => {

    const [toolData, setToolData] = useState(toolapi);
    return (
        <>
        <section className="service-main-container">
            <div className="container service-container">
                <h1 className="main-heading text-center fw-bold"><span id="red">Fitness </span> Calculators</h1>
               
               
                <div className="row">
                    {toolData.map((curElem) => {
                        const {id, logo, title, info, link} = curElem;
                        return( <> 
                          <div className="col-11 col-lg-4 col-xxl-4 work-container-subdiv" key={id}>
                        <i className={`fontawesome-style ${logo}`}></i>
                        <h2 className="sub-heading">{title}</h2>
                        <p className="main-hero-para">
                            {info}
                        </p>
                        <NavLink to={link}>
                            <button className="btn-style btn-style-border">Calculate</button>
                        </NavLink>
                    </div>
                        </>)
                    })}
                </div>
            </div>
        </section>
        
            
        </>
    )
}

export default Tools

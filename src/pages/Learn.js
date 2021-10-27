import React from 'react'
import Navbar from "../navbar";
import Footer from "../Footer"
import { bodycare } from '../API/bodycareApi';

const Learn = () => {

    
      const bodyCare = bodycare.map((data, key) => {
          return (
            <section className="mt-5" id={data.id}>
            <h2 className="bodytitle">{data.title}</h2>
        <div className="muscle-soreness d-flex mt-5">
            <div className="col-lg-4">
            <img width="400px" height="400px" src={data.img} alt="" />
            </div>
            <div className="soreness-info">
                <h2 className="font-weight-bold">{data.whatis}</h2>
                <p>{data.infowhatis}</p>
                <h2>Causes:</h2>
                <p>{data.causesinfo}</p>
                <h2>Solution:</h2>
                <p>{data.solution}</p>
            </div>
        </div>
        <hr />
    </section>
          )
      })
    
    return (
        <>
           <Navbar />

             <div className="learn-container">
                 
                 <h1 className="text-center head">BODY CARE IN FITNESS</h1>
                 <br />
                 <div className="bodycare">
                     <button className="special"><a href="#soreness">Muscle Soreness</a></button>
                     <button  className="special"><a href="#cramps">Muscle cramps</a></button>
                     <button  className="special"><a href="#dehydration">Dehydration</a></button>
                     <button  className="special"><a href="#imbalance">Muscle immbalance</a></button>
                 </div>
                 <div className="bodycare">
                     <button className="special"><a href="#injuries">Injuries</a></button>
                     <button  className="special"><a href="#marks">Strech marks</a></button>
                     <button  className="special"><a href="#heart">Heart problems</a></button>
                     <button  className="special"><a href="#joint">Joint problems</a></button>
                 </div>
                 <div className="bodycare">
                     <button className="special"><a href="#male">Male hormonal changes</a></button>
                     <button  className="special"><a href="#female">Female hormonal changes</a></button>
                     <button  className="special"><a href="#pregnancy">Weight gain in Pregnancy</a></button>
                     <button  className="special"><a href="#plateau">Plateau</a></button>
                 </div>

                 {bodyCare}

                
             </div>
           
           <Footer />
        </>
    )
}

export default Learn

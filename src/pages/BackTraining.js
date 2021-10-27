import React, { useState } from "react";
import Navbar from "../navbar";
import Footer from "../Footer";
import Commonsidebar from "../Commonsidebar";
import backdata from "../API/exerciseApi";

const BackTraining = () => {
  // const[backData, setBackData] = useState();
  // console.log(backData);

  const backData = backdata.map((data, key) => {
    return (
      
        <div className=" back-info" id={data.id}>
          <div className="pushup-container">
            <hr  />
            <h1 className="push-up text-center mt-5 mb-5 TITLE" >
              {data.title}
            </h1>
            <hr />
            <div className="pushup-info d-flex mt-5">
              <img src={data.gif} alt="" />
              <div>
                <h1> About</h1>
                <p className="pushup-para">{data.info}</p>
                <br />
                <h1> How to do:</h1>
                <p className="pushup-para"> {data.direction}</p>
              </div>
            </div>
          </div>
        </div>
      
    );
  });
  return (
    <>
      <Navbar />

      <div className="back-container row d-flex">
        
          <Commonsidebar 
            title1="Dumbbell row" id1="#dumbbel-row"
            title2="Lat pulldown"
            title3="Pull up"
            title4="Deadlift"
            title5="Reverse fly"
            title6="Back extension"
            title7="Seated Cable Row"
          />
        

        <div className="back-data col-lg-9">
          
              {backData}
         
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BackTraining;

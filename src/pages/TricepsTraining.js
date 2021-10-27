import React from 'react'
import Navbar from '../navbar'
import Footer from '../Footer'
import Commonsidebar from '../Commonsidebar'
import {backdata,tricepsdata} from '../API/exerciseApi'

const TricepsTraining = () => {
  const tricepsData = tricepsdata.map((data, key) => {
    return (
      
        <div className="back-info">
          <div className="pushup-container">
            <hr />
            <h1 className="push-up text-center mt-5 mb-5 TITLE" id={data.id}>
              {data.title}
            </h1>
            <hr />
            <div className="pushup-info d-flex mt-5">
              <img src={data.gif} alt="" />
              <div>
                <h1>About:</h1>
                <p className="pushup-para">{data.info}</p>
                <br />
                <h1>How to do:</h1>
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
            title1="Close-Grip Bench Press"
            title2="Rope Tricep Pushdown"
            title3="Lying Triceps Extension"
            title4="Tricep Dips"
            title5="Diamond Push-Ups"
            title6="Arm Overhead Extension"
           
          />
        

        <div className="back-data col-lg-9">
          {tricepsData}
        </div>
      </div>
            
            <Footer />
        </>
    )
}

export default TricepsTraining

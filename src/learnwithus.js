import React, {useState} from 'react'
import learnwsapi from './API/learnwuApi'

const Learnwithus = () => {
    const [learnData, setLearnData] = useState(learnwsapi);
    console.log(learnData);

    return (
        <>
          <section>
              <div className="work-container container">
                  <h1 className="main-heading text-center"><span id="red">Learn</span> with us</h1>
                  <div className="row">
                      {learnData.map((curElem) => {
                          const {id, logo, title, info} = curElem;
                          return <>
                            <div className="col-12 col-lg-4 text-center work-container-subdiv">
                      <i class={`fontawesome-style ${logo}`}></i>
                      <h2 className="sub-heading">{title}</h2>
                      <p className="main-hero-para w-100">{info}</p>
                      </div>
                          </>;
                      })}
                      
                  </div>
              </div>
          </section>
        </>
    )
}

export default Learnwithus

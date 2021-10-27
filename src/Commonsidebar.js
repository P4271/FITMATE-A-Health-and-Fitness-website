import React from 'react'

const Commonsidebar = (props) => {
    return (
        <>
            <div className=" common-sidebar">
               
               <ul className="cardio-ul">
                            <li className="cardio-li sidebarrow"><a href={props.id1} className="cardio__link active-link">{props.title1}</a></li>
                            <li className="cardio-li sidebarrow"><a href="#swimming" className="cardio__link active-link">{props.title2}</a></li>
                            <li className="cardio-li sidebarrow"><a href="#cycling" className="cardio__link active-link">{props.title3}</a></li>
                            <li className="cardio-li sidebarrow"><a href="#rowing" className="cardio__link active-link">{props.title4}</a></li>
                            <li className="cardio-li sidebarrow"><a href="#jumprope" className="cardio__link active-link">{props.title5}</a></li>
                            <li className="cardio-li sidebarrow"><a href="#zumba" className="cardio__link active-link">{props.title6}</a></li>
                            <li className="cardio-li sidebarrow"><a href="#jump" className="cardio__link active-link">{props.title7}</a></li>
                            <li className="cardio-li sidebarrow"><a href="#squatjump" className="cardio__link active-link">{props.title8}</a></li>
                            <li className="cardio-li sidebarrow"><a href="#burpees" className="cardio__link active-link">{props.title9}</a></li>     
                        </ul>
    
               </div> 
        </>
    )
}

export default Commonsidebar

import React from 'react'
import { SidebarChestdata } from './SidebarChestdata'

function Sidebar() {
    return (
        <div className="sidebar">
            <ul className="sidebarlist">
            {SidebarChestdata.map((val, key) => {
                return <li key={key} className="sidebarrow" id={window.location.pathname == val.link ? "active" : ""} onClick={()=>{window.location.pathname = val.link}}>
                    <div id="title">
                        {val.title}
                    </div>
                </li>; 
                
            })}
            </ul>
        </div>
    )
}

export default Sidebar

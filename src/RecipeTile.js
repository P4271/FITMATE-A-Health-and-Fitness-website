import React from 'react'

export default function RecipeTile({recipe}) {
    return (
        recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) !=null && (
        <div className="recipetile" onClick={() => {
            window.open(recipe["recipe"]["url"])
        }}>
            <img className="recipetile-img" src={recipe["recipe"]["image"]} alt="" />
           <p className="recipetile-name">{recipe["recipe"]["label"]}</p>
        </div>
    )
    )
    }


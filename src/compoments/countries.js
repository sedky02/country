import React from "react";
function Countries({image,name,pop,reg,cap}){
    return(
        <div  className="countries">
            <img  src={image} alt=""/>
            <div className="text">
                <h2 >{name}</h2>
                <div className="text-details">
                    <h4>Population: </h4>
                    <p>{pop}</p>
                </div>
                <div className="text-details">
                    <h4>Region: </h4>
                    <p>{reg}</p>
                </div>
                <div className="text-details">
                    <h4>Capital: </h4>
                    <p>{cap}</p>
                </div>
            </div>
        </div>
    );
}

export default Countries;
import React from 'react';
import {Link} from 'react-router-dom';
function Scountry({image,name,pop,reg,cap,nat,dom,cur,lan,bor}){
    

    return(
        <div className="country">
            <Link to='/'>
            <div className="back">
                {//<img src={svg} alt=""/>
                }
                 <h3>Back</h3>
            </div>
            </Link>
            
            <img src={image} alt=""/>
            <div className="text">
                <h2>{name}</h2>
                <div className="text-details">
                    <div className="part1">
                <div className="text-detail">
                    <h3>Native Name: </h3>
                    <p>{nat}</p>
                </div>
                <div className="text-detail">
                    <h3>Population: </h3>
                    <p>{pop}</p>
                </div>
                <div className="text-detail">
                    <h3>Region: </h3>
                    <p>{reg}</p>
                </div>
                <div className="text-detail">
                    <h3>Sub Region: </h3>
                    <p>{pop}</p>
                </div>
                <div className="text-detail">
                    <h3>Capital: </h3>
                    <p>{cap}</p>
                </div>
                    </div>
                    <div className="part2">
                <div className="text-detail">
                    <h3>Top Level Domain: </h3>
                    <p>{dom}</p>
                </div>
                <div className="text-detail">
                    <h3>Currencies: </h3>
                    <p>{cur}</p>
                </div>
                <div className="text-detail">
                    <h3>Languages: </h3>
                    <p>{lan}</p>
                </div>
                    </div>
                </div>
                <div className="part3">
                    <h3>Border Countries: </h3>
                    <p>{bor}</p>
                    
                </div>
            </div>
        </div>
    );
}
export default Scountry;
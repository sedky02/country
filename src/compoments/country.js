import React,{useEffect,useState} from "react";
import {Link} from 'react-router-dom';
import svg from './images/325-circle-left.svg';
function Country({match}){
    const [country,setCountry]=useState([])
    useEffect(()=>{
        getResponse();
        
    },[])
    const getResponse = async ()=>{
        const res = await fetch(`https://restcountries.eu/rest/v2/name/${match.params.name.toLowerCase()}`);
        const data = await res.json();
        setCountry(data);
        console.log(data);
    }
    return(
        <div className="country">
            
            {country.map(e=>(
               <div key={e.name} className="countr">
               <Link style={{textDecoration:'none'}} to='/'>
               <div className="back">
                    <img src={svg} alt=""/>
                    <h3>Back</h3>
               </div>
               </Link>
               
               <img className="img" src={e.flag} alt=""/>
               <div className="text">
                   <h1>{e.name}</h1>
                   <div className="text-details">
                       <div className="part1">
                   <div className="text-detail">
                       <h3>Native Name: </h3>
                       <p>{e.nativeName}</p>
                   </div>
                   <div className="text-detail">
                       <h3>Population: </h3>
                       <p>{e.population}</p>
                   </div>
                   <div className="text-detail">
                       <h3>Region: </h3>
                       <p>{e.region}</p>
                   </div>
                   <div className="text-detail">
                       <h3>Sub Region: </h3>
                       <p>{e.subregion}</p>
                   </div>
                   <div className="text-detail">
                       <h3>Capital: </h3>
                       <p>{e.capital}</p>
                   </div>
                   <div className="text-detail">
                       <h3>Top Level Domain: </h3>
                       <p>{e.topLevelDomain}</p>
                   </div>
                       </div>
                   </div>
                   
               </div>
           </div>
            ))}
            
        
        </div>
    );
}

export default Country;
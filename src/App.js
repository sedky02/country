import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router, Route , Switch , Link} from 'react-router-dom';
import svg1 from './images/325-circle-left.svg';
import svg2 from './images/135-search.svg';
import './App.scss';
///import Country from "./compoments/country";
import Countries from "./compoments/countries";
import Country from "./compoments/country";
function App() {
  //API staff
      //links
  const all= "https://restcountries.eu/rest/v2/all";
  const byRegion= `https://restcountries.eu/rest/v2/region/`;
  const byName= `https://restcountries.eu/rest/v2/name/` ;
      //states
  const [name,setName]=useState("");
  const [countries,setCountries]=useState([]);
  const [specific, setSpecific]=useState('all');
  const [api, setApi]= useState(specific);

  useEffect(()=>{
    fetchCoubtries();
  },[ api   ])
  const fetchCoubtries= async ()=>{
    const response = await fetch(`https://restcountries.eu/rest/v2/${api}`);
    const data = await response.json();
    setCountries(data);
    console.log(data);
  }
  //search
  function searchMe(e){
    setName(e.target.value)
    setApi( name ===''? specific : `name/${name}` )
  }
  
  
    //dark mode 
  const [dark , setDark]=useState(false);
  function darkit(){
    setDark(!dark)
    console.log(dark);
  }
  const darkMode = dark? "dark-mode": "";
  // 
  const [dropBtn , setDropBtn]=useState(false);
  function dropIt(){
    setDropBtn(!dropBtn)
  }
  function specificIt(e){
    setApi(e)
    
    setDropBtn(!dropBtn)
    console.log(specific);
  }
  const active = dropBtn? "active": "";
  //countri 
  const Countri = () =>{
    return(
      <div className="countri">
      {countries.map(country=>(
        <Link style={{textDecoration:'none'}} to={`/country/${country.name}`}>
        <Countries  image={country.flag} 
        name={country.name}
        pop={country.population} 
        reg={country.region} 
        cap={country.capital} />
        </Link>
      ))}
      </div>
    );
  }
  return(
    <Router>
    <div className={`app ${darkMode}`}>
      <header className="nav">
        <h1>Where in the world?</h1>
        <div class="theme-switch-wrapper">
          <em>Dark Mode </em>
          <label   class="theme-switch" for="checkbox">
            <input type="checkbox" id="checkbox" />
            <div onClick={darkit} class="slider round"></div>
          </label>
        </div>
      </header>
      <div className="Home">
        <div className="search">
            <img src={svg2} />
            <input onChange={searchMe} value={name} type="text" placeholder="Search for a country..."/>
          
        </div>
        <div className="dropDown">
          <div onClick={dropIt} className="drop">
          <p> Filter by region:</p>
          <img src={svg1} />
          </div>
          <div className={`regions ${active}`}>
            <h4 onClick={()=>(specificIt("all") )}>All</h4>
            <h4 onClick={()=>(specificIt("region/africa") )}>Africa</h4>
            <h4 onClick={()=>(specificIt("region/americas") )}>Americas</h4>
            <h4 onClick={()=>(specificIt("region/asia") )}>Asia</h4>
            <h4 onClick={()=>(specificIt("region/europe") )}>Europe</h4>
            <h4 onClick={()=>(specificIt("region/oceania") )}>Oceania</h4>
          </div>
        </div>
      </div>
      <Switch>
        <Route path="/" exact component={Countri}/>
        <Route path="/country/:name"  component={Country}/>
      </Switch>
      

    </div>
    </Router>
  );
}

export default App;

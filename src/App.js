import React,{useEffect, useState} from 'react'
import Home from "./layouts/home";
import Screen from "./helpers/screen"
import './App.css';
import {services} from "./const/propsToComponents.js"
import WhatIs from './layouts/whatIs';
import Team from './layouts/team';
import Service from "./layouts/service"
import Path from "./layouts/path"
import Contact from './layouts/contact';

const App = () => {

  const [deviceWidth,setdeviceWidth]=useState(window.innerWidth);


  useEffect(()=>{
     setdeviceWidth(Screen(deviceWidth))
     window.addEventListener('resize', orientation);
     
     return () => 
     {
         
         window.removeEventListener('resize', orientation);
     }

    },[])
  
  
  const orientation=()=>
    {
      setdeviceWidth(Screen(window.innerWidth))
    }
  
  
  return (
          <div style={{fontSize:deviceWidth[1]+"px"}} className="App">

            <Home />
            <WhatIs />
            <Team/>
            <Service {...{services}} />
            <Path/>
            <Contact/>
            
          </div>
  );
}

export default App;

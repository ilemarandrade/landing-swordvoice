import React,{useEffect, useState} from 'react'
import LayoutHome from "./layouts/layoutHome";
import Screen from "./helpers/screen"
import './App.css';
import LayoutWhatIs from './layouts/layoutWhatIs';
import LayoutTeam from './layouts/layoutTeam';
import LayoutService from "./layouts/layoutService"
import LayoutPath from "./layouts/layoutPath"
import LayoutContact from './layouts/layoutContact';

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

            <LayoutHome />
            <LayoutWhatIs />
            <LayoutTeam/>
            <LayoutService/>
            <LayoutPath/>
            <LayoutContact/>
            
          </div>
  );
}

export default App;

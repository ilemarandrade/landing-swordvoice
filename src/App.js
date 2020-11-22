<<<<<<< HEAD
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
=======
import React, { useEffect, useState } from 'react';
import LayoutHome from './layouts/layoutHome';
import Screen from './helpers/screen';
import './App.css';
import LayoutWhatIs from './layouts/layoutWhatIs';
import LayoutTeam from './layouts/layoutTeam';
import LayoutService from './layouts/layoutService';
import LayoutPath from './layouts/layoutPath';
import LayoutContact from './layouts/layoutContact/layoutContact';
import { ThemeProvider } from 'styled-components';

const theme = {
  palette: {
    terciary: '#ff7a00',
  },
  bg: 'white',
};
>>>>>>> 9658c0d96bc1ec306c6ef706c5136309c9bc990d

const App = () => {
  const [deviceWidth, setdeviceWidth] = useState(window.innerWidth);

  useEffect(() => {
    setdeviceWidth(Screen(deviceWidth));
    window.addEventListener('resize', orientation);

    return () => {
      window.removeEventListener('resize', orientation);
    };
  }, []);

  const orientation = () => {
    setdeviceWidth(Screen(window.innerWidth));
  };

  return (
<<<<<<< HEAD
          <div style={{fontSize:deviceWidth[1]+"px"}} className="App">

            <Home />
            <WhatIs />
            <Team/>
            <Service {...{services}} />
            <Path/>
            <Contact/>
            
          </div>
=======
    <ThemeProvider theme={theme}>
      <div style={{ fontSize: deviceWidth[1] + 'px' }} className="App">
        <LayoutHome />
        <LayoutWhatIs />
        <LayoutTeam />
        <LayoutService />
        <LayoutPath />
        <LayoutContact />
      </div>
    </ThemeProvider>
>>>>>>> 9658c0d96bc1ec306c6ef706c5136309c9bc990d
  );
};

export default App;

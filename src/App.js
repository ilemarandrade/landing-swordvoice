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
import {path, services} from "./const/propsToComponents.js";

const theme = {
  palette: {
    terciary: '#ff7a00',
  },
  bg: 'white',
};

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
    <ThemeProvider theme={theme}>
      <div style={{ fontSize: deviceWidth[1] + 'px' }} className="App">
        <LayoutHome />
        <LayoutWhatIs />
        <LayoutTeam />
        <LayoutService {...{services:services}} />
        <LayoutPath {...{path:path}} />
        <LayoutContact />
      </div>
    </ThemeProvider>
  );
};

export default App;

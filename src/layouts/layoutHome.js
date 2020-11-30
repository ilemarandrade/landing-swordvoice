import React from 'react';
import Nav from '../componentes/nav';

const LayoutHome = () => {
  return (
    <div id="layoutHome">
      
      <Nav/>

      <div id="containerInteractionHome">
        <div id="interactionHome" className="perfectCentered text-align-c">
          <div id="borderInteractionHome" />

          <div id="titleOfInteractionHome">
            <p className="font-c-primary font-s-4 font-primary">
              SwordVoice Academy
            </p>

            <p className="font-c-secondary">
              <span className="font-w-600">Academia online </span>no tradicional
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutHome;

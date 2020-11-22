import React from 'react';

const LayoutHome = () => {
  return (
    <div id="layoutHome">
      <div id="header">
        <div id="nameAcademy" className="perfectCentered">
          <div className="font-primary ">
            <p className="font-c-secondary " lang="en">
              SwordVoice
            </p>

            <p className="font-c-primary " lang="en">
              Academy
            </p>
          </div>
        </div>

        <div id="nav" className="font-secondary font-c-secondary ">
          <div>Conócenos</div>
          <div>Servicios</div>
          <div>Nuestro Path</div>
          <div>Contactenos</div>
        </div>
      </div>

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

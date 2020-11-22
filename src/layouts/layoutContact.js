import React from 'react';
import World from '../assets/img/World';
import FacebookIcon from '../assets/img/FacebookIcon';
import InstagranIcon from '../assets/img/InstagranIcon';
import WebIcon from '../assets/img/WebIcon';

const LayoutContact = () => {
  return (
    <div id="layoutContact">
      <div className="perfectCentered flex-column">
        <p className="font-primary font-s-4 font-c-primary">Contactanos</p>

        <World />
        <div className="margin-b-2">
          <a href="#">
            <FacebookIcon />
          </a>

          <a href="#">
            <InstagranIcon />
          </a>

          <a href="#">
            <WebIcon />
          </a>
        </div>
      </div>

      <div className="perfectCentered flex-column font-secondary">
        <p className="font-c-secondary w-80">Nombre y Apellido</p>
        <input type="text" className="margin-b-1" />

        <p className="font-c-secondary w-80">Correo Electronico</p>
        <input type="text" className="margin-b-1" />

        <p className="font-c-secondary w-80">Mensaje</p>
        <input type="text" />
      </div>
    </div>
  );
};

export default LayoutContact;

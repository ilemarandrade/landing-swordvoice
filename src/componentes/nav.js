import React from 'react';
import NameAcademy from '../components/nameAcademy';

const Nav = () => {
  return (
    <div id="header">
      <NameAcademy />

      <div id="nav" className="font-secondary font-c-primary ">
        <div className="link-container">
          <a href="#layoutTeam">Conócenos</a>
        </div>
        <div className="link-container">
          <a href="#layoutService">Servicios</a>
        </div>
        <div className="link-container">
          <a href="#layoutPath">Nuestro Path</a>
        </div>
        <div className="link-container">
          <a href="#layoutContact">Contactenos</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;

import React from 'react';
import World from '../../assets/img/World';
import WebIcon from '../../assets/img/WebIcon';
import FacebookIcon from '../../assets/img/FacebookIcon';
import InstagranIcon from '../../assets/img/InstagranIcon';
import ContactForm from '../../componentes/contactForm';

const LayoutContact = () => {
  return (
    <div id="layoutContact">
      <div className="perfectCentered flex-column">
        <p className="font-primary font-s-4 font-c-primary">Contáctanos</p>

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
        <ContactForm />
      </div>
    </div>
  );
};

export default LayoutContact;

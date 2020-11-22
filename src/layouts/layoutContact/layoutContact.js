import React from 'react';
import World from '../../assets/img/World';
import FacebookIcon from '../../assets/img/FacebookIcon';
import InstagranIcon from '../../assets/img/InstagranIcon';
import WebIcon from '../../assets/img/WebIcon';

/**
 * Componente de presentacion: esta solo la UI
 *
 */

const LayoutContact = ({ form, onFormElementChange }) => {
  const formElements = [
    {
      label: 'Nombre y Apellido',
      onChange: event => onFormElementChange(event),
    },
    {
      label: 'Correo Electronico',
      onChange: event => onFormElementChange(event),
    },
    {
      label: 'Mensaje',
      onChange: event => onFormElementChange(event),
    },
  ];

  const formJSX = formElements.map((formElement, index) => (
    <div className="w-50" key={index}>
      <p className="font-c-secondary">{formElement.label}</p>
      <input
        onChange={event => {
          onFormElementChange(event, index);
        }}
        value={form[index]}
        type="text"
        className="margin-b-1"
      />
    </div>
  ));

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
        {formJSX}
      </div>
    </div>
  );
};

export default LayoutContact;

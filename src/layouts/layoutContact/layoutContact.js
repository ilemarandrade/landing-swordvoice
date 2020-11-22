import React from 'react';
import World from '../../assets/img/World';
import WebIcon from '../../assets/img/WebIcon';
import FacebookIcon from '../../assets/img/FacebookIcon';
import InstagranIcon from '../../assets/img/InstagranIcon';

/**
 * Componente de presentacion: esta solo la UI
 */

const LayoutContact = ({ form, onFormElementChange }) => {
  const formElements = [
    {
      name: 'name',
      label: 'Nombre y apellido',
      type: 'inputText',
      onChange: onFormElementChange,
    },
    {
      name: 'email',
      label: 'Correo electrónico',
      type: 'inputText',
      onChange: onFormElementChange,
    },
    {
      name: 'message',
      label: 'Mensaje',
      type: 'textarea',
      onChange: onFormElementChange,
    },
  ];
  const formMapJSX = formElements.map((formElement, index) => (
    <div className="w-50" key={index}>
      <p className="font-c-secondary">{formElement.label}</p>
      {formElement.type.match('inputText') && (
        <input
          name={formElement.name}
          onChange={formElement.onChange}
          value={form[index]}
          type="text"
          className="margin-b-1"
        />
      )}
      {formElement.type.match('textarea') && (
        <textarea
          name={formElement.name}
          onChange={formElement.onChange}
          value={form[index]}
          className="margin-b-1"
        />
      )}
    </div>
  ));

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
        {formMapJSX}
      </div>
    </div>
  );
};

export default LayoutContact;

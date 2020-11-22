import React, { useState } from 'react';
import LayoutContact from './layoutContact';

/**
 * Componente controlador: donde se maneja toda la logica
 *
 * Se separa presentacion de controlador
 */
export default () => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [message, setmessage] = useState('');

  const onFormElementChange = event => {
    const { value, name } = event.target;
    switch (name) {
      case 'name': {
        //validaciones de nombre
        setname(value);
        break;
      }
      case 'email': {
        //validaciones de correo
        setemail(value);
        break;
      }
      case 'message': {
        setmessage(value);
        break;
      }
      default:
        break;
    }
  };

  const form = [name, email, message];

  return (
    <LayoutContact form={form} onFormElementChange={onFormElementChange} />
  );
};

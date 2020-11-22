import React, { useState } from 'react';
import LayoutContact from './layoutContact';

/**
 * Componente controlador: donde se maneja toda la logica
 *
 * Se separa presentacion de controlador
 */
export default () => {
  const [form, setform] = useState(['', '', '']);

  const onFormElementChange = (event, index) => {
    const { value } = event.target;
    const formCopy = [...form]; //me aseguro de modificar una copia del estado para asegurar inmutabilidad
    formCopy[index] = value;
    setform(formCopy);
  };
  return (
    <LayoutContact form={form} onFormElementChange={onFormElementChange} />
  );
};

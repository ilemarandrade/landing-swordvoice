import React from 'react';

const LayoutWhatIs = () => {
  return (
    <div id="layoutWhatIs" className="display-flex">
      <div id="whatIsText" className="flex-column display-flex">
        <div id="titleWhatIs" className="perfectCentered margin-b-3">
          <div className="font-primary position-relative">
            <p className="font-c-secondary font-s-2 text-align-s">¿Que es</p>
            <p className="font-c-secondary font-s-3 ">Swordvoice</p>
            <p className="font-c-primary font-s-2 text-align-e">Academy</p>
            <p className="font-s-3">?</p>
          </div>
        </div>

        <div>
          <p className="font-secondary font-s-1-5 margin-b-1">
            Hola, somos <span className="font-w-600">swordvoice academy</span> y
            si buscas cursos online tradicionales{' '}
            <span className="font-w-600">NO</span> estás en el lugar correcto.
          </p>
          <p className="font-secondary font-s-1-5">
            Nosotros ofrecemos un modelo diferente, un modelo de mentorías.
            Sabemos que la informacion está disponible en la Web, pero ¿por
            dónde empezar?. Tu MENTOR asignado te proveerá de los recursos y el
            plan que debes seguir para que no pierdas tiempo.
          </p>
        </div>
      </div>

      <div id="imgWhatIs"></div>
    </div>
  );
};

export default LayoutWhatIs;

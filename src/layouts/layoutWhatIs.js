import React from 'react';

const LayoutWhatIs = () => {
  return (
    <div id="layoutWhatIs" className="df">
      <div id="whatIsText" className="fdc df">
        <div id="titleWhatIs" className="perfectCentered mb-3">
          <div className="font-primary pR">
            <p className="fc-secondary fs-2 tx-s">¿Que es</p>
            <p className="fc-secondary fs-3 ">Swordvoice</p>
            <p className="fc-primary fs-2 tx-e">Academy</p>
            <p className="fs-3">?</p>
          </div>
        </div>

        <div>
          <p className="font-secondary fs-1-5 mb-1">
            Hola, somos <span className="fw-600">swordvoice academy</span> y si
            buscas cursos online tradicionales{' '}
            <span className="fw-600">NO</span> estás en el lugar correcto.
          </p>
          <p className="font-secondary fs-1-5">
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

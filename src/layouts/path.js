import React from 'react';

const LayoutPath = () => {
  return (
    <div id="layoutPath">
      <div id="titlePaths">
        <p className="font-primary font-c-secondary">
          Nuestros <span className="font-c-terciary">Paths</span>
        </p>
      </div>
      <div>
        <div className="containerPaths">
          <div className="margin-b-1 perfectCentered flex-column">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="svgPaths"
                viewBox="0 0 24 24"
              >
                <circle cx="17" cy="4" r="2" />
                <path d="M15.777,10.969c0.376,0.563,1.008,0.89,1.666,0.89c0.16,0,0.322-0.02,0.482-0.06l3.316-0.829L20.758,9.03l-3.316,0.829 l-1.379-2.067c-0.291-0.439-0.756-0.751-1.272-0.854l-3.846-0.77c-0.888-0.181-1.778,0.265-2.181,1.067l-1.658,3.316l1.789,0.895 l1.658-3.317l1.967,0.394L7.434,17H3v2h4.434c0.698,0,1.355-0.372,1.715-0.971l1.918-3.196l5.169,1.034l1.816,5.449l1.896-0.633 l-1.815-5.448c-0.226-0.679-0.802-1.188-1.506-1.33l-3.039-0.607l1.772-2.954L15.777,10.969z" />
              </svg>
            </div>
            <div>
              <p className="font-secondaryTitle text-align-c margin-b-1 font-s-2">
                Iniciated:
              </p>
              <p className="font-secondary pbothLR text-align-c font-s-1-3">
                Serás un jr Frontend Developer. Podrás crear interfaces de
                usuario interactivas e integrarlas con servicios propios o de
                terceros.
              </p>
            </div>
          </div>

          <div className="margin-b-2 perfectCentered flex-column">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="svgPaths"
                viewBox="0 0 24 24"
              >
                <path d="M11.975,22H12c3.859,0,7-3.14,7-7V9c0-3.841-3.127-6.974-6.981-7C12.013,2,12.006,2,12,2c-0.002,0-0.016,0-0.018,0 c-0.009,0-0.016,0-0.023,0C8.119,2.022,5,5.157,5,9v6C5,18.86,8.129,22,11.975,22z M7,9c0-2.751,2.238-4.994,4.985-5 C14.75,4.006,17,6.249,17,9v6c0,2.757-2.243,5-5,5h-0.025C9.186,20,7,17.804,7,15V9z" />
                <path d="M11 6H13V12H11z" />
              </svg>
            </div>

            <div>
              <p className="font-secondaryTitle text-align-c margin-b-1 font-s-2">
                Wanderer
              </p>
              <p className="font-secondary pbothLR text-align-c font-s-1-3">
                Serás jr backend developer. Podrás implementar lógica de negocio
                y crear los servicios que soportan a todas las aplicaciones web
                modernas.
              </p>
            </div>
          </div>
        </div>
        <div className="pbothLR">
          <div>
            <p className="font-secondary margin-b-1 font-s-2">
              <span className="font-secondaryTitle">Warrior:</span> proximamente
            </p>
            <p className="font-secondary margin-b-1 font-s-2">
              <span className="font-secondaryTitle">Master:</span> proximamente
            </p>
          </div>
          <p className="font-secondary margin-b-1 font-s-2 text-align-c">
            <span className="font-secondaryTitle">Ancient:</span> proximamente
          </p>
        </div>
      </div>
    </div>
  );
};
export default LayoutPath;

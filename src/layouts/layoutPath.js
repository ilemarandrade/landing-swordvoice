import React from 'react';

const LayoutPath = ({ path = [] }) => {
  const PathActived = path.map((e, i) => {
    if (e.status === `activated`) {
      return (
        <div
          key={i + e.title}
          className="margin-b-1 display-flex dfa-center flex-column"
        >
          <div>{e.svg}</div>

          <div>
            <p className="font-secondaryTitle text-align-c margin-b-1 font-s-2">
              {e.title}
            </p>

            <p className="font-secondary pbothLR text-align-c font-s-1-3">
              {e.description}
            </p>
          </div>
        </div>
      );
    }

    return null;
  });

  return (
    <div id="layoutPath">
      <div id="titlePaths">
        <p className="font-primary font-c-secondary">
          Nuestros <span className="font-c-terciary">Paths</span>
        </p>
      </div>

      <div>
        <div className="containerPaths">{PathActived}</div>
      </div>
    </div>
  );
};
export default LayoutPath;

import React from 'react';

const NameAcademy = ({
  styleNameAcademy = {},
  styleFirstWord = {},
  styleTwoWord = {},
}) => {
  return (
    <div id="nameAcademy">
      <div className="font-primary">
        <p className="font-c-primary " lang="en" style={styleFirstWord}>
          SwordVoice
        </p>

        <p className="font-c-secondary " lang="en" style={styleTwoWord}>
          Academy
        </p>
      </div>
    </div>
  );
};

export default NameAcademy;

NameAcademy.defaultProps = {
  styleFirstWord: {
    fontSize: '3.5em',
  },
  styleTwoWord: {
    fontSize: '2em',
    position: 'absolute',
    top: '1.5em',
    left: '4.5em',
  },
};

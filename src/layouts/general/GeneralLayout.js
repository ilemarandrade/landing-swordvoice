import React from 'react';
import styled from 'styled-components';

const GeneralLayout = ({ children, onGoHome }) => {
  return (
    <div>
      <FixedButton className="cP">
        <UpBtnContainer>
          <h2 onClick={onGoHome}>UP</h2>
        </UpBtnContainer>
      </FixedButton>
      {children}
    </div>
  );
};

const UpBtnContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FixedButton = styled.div`
  position: fixed;
  width: 50px;
  height: 50px;
  right: 30px;
  bottom: 10px;
  z-index: 2000;
  border-radius: 100%;
  background-color: #00c2ff;
`;

export default GeneralLayout;

import React from 'react';
import MentorContainer from '../componentes/mentorContainer';
import { dataMentors } from '../const/propsToComponents';

const LayoutTeam = () => {
  return (
    <div id="layoutTeam">
      <MentorContainer {...{dataMentors:dataMentors}}/>
    </div>
  );
};

export default LayoutTeam;

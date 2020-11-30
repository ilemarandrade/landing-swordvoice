import React from 'react';

const MentorContainer = ({dataMentors}) => 
{
  console.log(dataMentors)
  const mentors = dataMentors.map(e => {
    return (
      <div key={`${e.name}`} className="mentorContainer">
        
        <div
          style={{
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 52.49%, #005EB6 94.1%),url("${e.img}")`,
          backgroundBlendMode: 'multiply, normal',
          backgroundSize:`cover`

          
          }}
          className="imgMentor margin-b-1 w-100"
        >

          <p className="font-c-secondary font-primary font-s-1-5 margin-b-05">
            {e.name}
          </p>

        </div>

        <div class="descriptionMentors">

        
          <p
            className="font-secondary margin-b-05"
            style={{ width: '8em' }}
          >
            {e.rol}
          </p>

          <div>
          
          </div>
        </div>

      </div>
    );
  });

  return (<>
            {mentors}

        </>);
};

export default MentorContainer;

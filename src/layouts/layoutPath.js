import React from 'react';
import IconIniciated from '../assets/img/IconIniciated';
import WandererIcon from '../assets/img/WandererIcon';

const LayoutPath = ({ path = [] }) => {
  
  const PathActived = path.map((e,i)=>
  {
    let jsx;

    if(e.status==`Activated`)
    {
      
      jsx = <div key={i+e.title} className="margin-b-1 display-flex dfa-center flex-column">

              <div>

                {e.svg}
                
              </div>

              <div>
                
                <p className="font-secondaryTitle text-align-c margin-b-1 font-s-2">
                  
                  {e.title}
                
                </p>
                
                <p className="font-secondary pbothLR text-align-c font-s-1-3">
                  
                  {e.description}

                </p>

              </div>

            </div>

    }
  
    
    return jsx
            

  })

  const PathDesactived  = path.map((e,i)=>
  {
    let jsx;

    if(e.status!=`Activated`)
    { 
      jsx = <p className="font-secondary margin-b-1 font-s-2">
              
              <span className="font-secondaryTitle">{e.title}</span> {e.description}
            
            </p> 
    }
  
    
    return jsx
            

  })  
  
  return (
    <div id="layoutPath">
      
      <div id="titlePaths">
       
        <p className="font-primary font-c-secondary">
          Nuestros <span className="font-c-terciary">Paths</span>
        </p>
     
      </div>
     
      <div>

        <div className="containerPaths">
          
          {PathActived}

        </div>

        <div className="text-align-c display-flex dfj-space-around dfw-w pbothLR">

          {PathDesactived}

        </div>

      </div>

    </div>
  );
};
export default LayoutPath;

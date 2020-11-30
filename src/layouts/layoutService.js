import React from 'react';

const LayoutService = ({services = [] }) => {

  const ServicesFirstColumn = services.map((e,i)=>
  {
    
    if(i<3)
    {  
      return(
              <div key={i+e.title} className="font-c-secondary display-flex mbItemsService">
                
                <div>

                  {e.svg}           
      
                </div>

                <div>
                  
                  <p className="font-secondaryTitle itemServiceTitle">
                    {e.title}
                  </p>
                  
                  <p className="font-secondary itemServiceText">
                    {e.description}
                  </p>
              
                </div>

              </div>
          )
      }  


  }) 

  const ServicesSecondColumn = services.map((e,i)=>
  {
    
    if(i>2)
    {  
      return(
              <div key={i+e.title} className="font-c-secondary display-flex mbItemsService">
                
                <div>

                  {e.svg}           
      
                </div>

                <div>
                  
                  <p className="font-secondaryTitle itemServiceTitle">
                    
                    {e.title}
                 
                  </p>
                  
                  <p className="font-secondary itemServiceText">
                    
                    {e.description}
                  
                  </p>
              
                </div>

              </div>
          )
      }  


  }) 

  
  return (
    <div id="layoutService" className="text-align-j">
      <div>

        <div id="titleService" className=" margin-b-1">
          <p className="font-primary font-c-secondary ">¿Qué incluye</p>
          <p className="font-primary font-c-primary">nuestro servicio?</p>
        </div>

        {ServicesFirstColumn}
        
      </div>

      <div id="serviceDivTwo">
              
        {ServicesSecondColumn}

      </div>

    </div>
  );
};

export default LayoutService;

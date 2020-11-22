import React from "react"



const LayoutService = ({services}) =>
{
  
     const servicesFirstDiv = services.map((e,i)=>
    {
         let result  =   i   <   3   ?
        <>
            <div className="fc-secondary df mbItemsService">

                <div>

                    {e.svg}
                
                </div>
                    
                <div>

                    <p className="font-secondaryTitle itemServiceTitle" >{e.title}</p>
                    <p className="font-secondary itemServiceText">{e.description}</p>
                </div>
            </div>
        </>
        :
        <></>   
        
        return  result
    });

    const servicesTwoDiv = services.map((e,i)=>
    {
        let result  =   i   >=  3   ?
        <>
            <div className="fc-secondary df mbItemsService">

                <div>

                    {e.svg}
                
                </div>
                    
                <div>

                    <p className="font-secondaryTitle itemServiceTitle" >{e.title}</p>
                    <p className="font-secondary itemServiceText">{e.description}</p>
                </div>
            </div>
        </>
        :
        <></>    
        
        return  result  
        
    });



    return(
            <div id="layoutService" className="tx-j">

                <div>

                    <div id="titleService" className=" mb-1">

                        <p className="font-primary fc-secondary ">¿Qué incluye</p>
                        <p className="font-primary fc-primary">nuestro servicio?</p>

                    </div>

                    {servicesFirstDiv}

                    

                </div>

                <div id="serviceDivTwo">

                    {servicesTwoDiv}
                     
                </div>


                
            </div>

        
        )


}

export default LayoutService
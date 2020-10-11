import React from "react"
import MenuMobile from "../componentes/menuMobile.js"




const LayoutHome = () =>
{
    return(
            <div id="layoutHome">

                <div id="header">

                    <div id="nameAcademy" className="perfectCentered">
                        
                        <div className="font-primary ">    
                            <p className="fc-secondary " lang="en">SwordVoice</p>

                            <p className="fc-primary " lang="en">Academy</p>
                        </div>
                    
                    </div>

                    <div id="nav" className="font-secondary fc-secondary ">
                        <div>Conócenos</div>
                        <div>Servicios</div>
                        <div>Nuestro Path</div>
                        <div>Contactenos</div>

                    </div>
                
                    <MenuMobile />
                
                </div> 
                
                
                

                    <div id="containerInteractionHome" >

                        <div id="interactionHome" className="perfectCentered tx-c">

                           <div id="borderInteractionHome" />

                           <div id="titleOfInteractionHome">

                                <p className="fc-primary fs-4 font-primary">SwordVoice Academy</p>

                                <p className="fc-secondary"><span className="fw-600">Academia online </span>no tradicional</p>




                        </div>



                    </div>

                    </div>

                   
                    
                
                
                
                

            </div>
    )

}



export default LayoutHome
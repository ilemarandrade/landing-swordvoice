import React from "react"




const LayoutHome = () =>
{
    return(
            <div id="layoutHome">

                <div id="header">

                    <div id="nameAcademy" className="perfectCentered">
                        
                        <div>    
                            <p className="fc-secondary " lang="en">SwordVoice</p>

                            <p className="fc-primary " lang="en">Academy</p>
                        </div>
                    
                    </div>

                    <div id="nav">
                        <div className="fc-secondary">Contactenos</div>
                        <div className="fc-secondary">Servicios</div>
                        <div className="fc-secondary">Nuestro Path</div>
                        <div className="fc-secondary">Contactenos</div>

                    </div>
                </div> 
                
                
                <div className="pt-3">

                    <div id="interactionHome" className="perfectCentered tx-c">


                        <div id="borderInteractionHome" />

                        <div id="titleOfInteractionHome">

                    <p className="fc-primary fs-2">SwordVoice Academy</p>
                    <p className="fc-secondary"><span className="fw-600">Academia online </span>no tradicional</p>


                </div>

                    </div>

                </div>    
                    
                
                
                
                

            </div>
    )

}



export default LayoutHome
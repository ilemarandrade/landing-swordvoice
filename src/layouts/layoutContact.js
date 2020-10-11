import React from "react"
import { FacebookSvg, IgSvg, PlanetSvg, WorldSvg } from "../assets/svg/svg"


const LayoutContact = () =>
{
    return (
            <div id="layoutContact">
                <div className="perfectCentered fdc">

                    <p id="titleContact" className="font-primary fc-primary">Contactanos</p>

                    <WorldSvg/>
                
                    <div className="mb-2">

                        <a href="#">

                            <FacebookSvg/>

                        </a>

                        <a>

                           <IgSvg/>
                           
                        </a>

                        <a>
                            
                            <PlanetSvg/>
                            
                        </a>

                    </div>

                </div>
                
                <div className="perfectCentered fdc font-secondary pbothLR-containerInput">

                    <div id="nameAcademyContact" className="pR mb-3">
                        
                        <div className="font-primary ">    
                            <p className="fc-secondary " lang="en">SwordVoice</p>

                            <p className="fc-primary " lang="en">Academy</p>
                        </div>
                    
                    </div>

                    <p className="fc-secondary w-100 mb-05">Nombre y Apellido</p>
                    <input type="text" className="mb-1" />

                    <p className="fc-secondary w-100 mb-05">Correo Electronico</p>
                    <input type="text" className="mb-1" />

                    <p className="fc-secondary w-100 mb-05">Mensaje</p>
                    <textarea type="text" className="mb-2" />

                    <div className="dfJ-end w-100">

                        <div id="sendForm">
                            ENVIAR
                        </div>

                    </div>   


                </div>

                
            </div>
    )
}


export default LayoutContact
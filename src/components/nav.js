import React from "react"
import NameAcademy from "./nameAcademy"


const Nav    =   ()  =>
{
    
    return(
            <div id="header">

                    <NameAcademy/>

                    <div id="nav" className="font-secondary fc-secondary ">
                        
                        <div>Conócenos</div>
                        <div>Servicios</div>
                        <div>Nuestro Path</div>
                        <div>Contactenos</div>

                    </div>
                </div> 
        
    )

}

export default  Nav
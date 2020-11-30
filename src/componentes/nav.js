import React from "react"
import NameAcademy from "../components/nameAcademy"


const Nav    =   ()  =>
{
    
    return(
            <div id="header">

                    <NameAcademy/>

                    <div id="nav" className="font-secondary fc-secondary ">
                        
                        <div className="cP">Conócenos</div>
                        <div className="cP">Servicios</div>
                        <div className="cP">Nuestro Path</div>
                        <div className="cP">Contactenos</div>

                    </div>
                </div> 
        
    )

}

export default  Nav
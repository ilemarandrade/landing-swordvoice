import React from "react"
import Nav from "../components/nav"




const LayoutHome = () =>
{
    return(
            <div id="layoutHome">

                    <Nav/>  

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
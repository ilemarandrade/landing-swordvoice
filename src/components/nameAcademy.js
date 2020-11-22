import React from "react"


const NameAcademy = ({styleNameAcademy={},styleFirstWord={},styleTwoWord={}})  =>
{
    console.log(styleNameAcademy)
    return(
            <div id="nameAcademy" style={styleNameAcademy} className="">
                            
                <div className="font-primary">

                    <p className="fc-secondary " lang="en" style={styleFirstWord} >SwordVoice</p>

                    <p className="fc-primary " lang="en" style={styleTwoWord} >Academy</p>

                </div>
            
            </div>  
    )

}

export default NameAcademy

NameAcademy.defaultProps    =   {

    styleNameAcademy:
    {
        display: "flex",
        position: "absolute",
        left: "4em",
        top:"6vh"
    }, 
    styleFirstWord:
    {
        fontSize: "3.5em"
    },
    styleTwoWord:
    {
        fontSize: "2em",
        position: "absolute",
        top: "1.5em",
        left: "4.5em"
    }

    
  } 

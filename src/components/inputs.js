import React from "react"


export const Input  =   ({type="text", name="name",label="default",width="80%",})  =>
{
    return(
            <div  className="mb-1" style={{width}}>

                <label for={name} className="fc-secondary w-80">{label}</label>
                <input type={type} name={name} className="mt-05" />

            </div>

            )
}

export const TextArea   =   ({name="textarea",label="default",width="80%",maxWidth="100%",maxHeight="10em"})  =>
{

    let styleTextA=
    {
        width,
        maxWidth,
        maxHeight,
    }
    return(
            <div  className="mb-1" style={{width}}>

                <label for={name} className="fc-secondary w-80">{label}</label>
                <textarea name={name} style={styleTextA} className="mt-05" />

            </div>
          )

}
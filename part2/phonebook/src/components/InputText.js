import React from 'react'

//Template to create a input text with controlled-component approach
const InputText = ({functionControlChange, currentInputControl, textDisplay}) => {
    return (
    <div>
        {textDisplay} <input value={currentInputControl} onChange={functionControlChange}/>
    </div>
    )
}
export default InputText
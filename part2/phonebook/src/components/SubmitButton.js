import React from 'react'

//Decided to use this button separated to it would be easier to change if it's a different style
const SubmitButton = ({onClickFunc, text}) => {
    return (
        <button type="submit" onClick={onClickFunc}>{text}</button>
    )
}

export default SubmitButton
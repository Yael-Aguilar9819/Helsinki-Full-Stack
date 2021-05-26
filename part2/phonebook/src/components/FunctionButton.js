import React from 'react'

//Decided to use this button separated to it would be easier to change if it's a different style
const FunctionButton = ({onClickFunc, text}) => {
    const buttonStyle = {
        marginLeft: 4,
        maxHeight: 20
    }

    return (
        <button style={buttonStyle} type="submit" onClick={onClickFunc}>{text}</button>
    )
}

export default FunctionButton
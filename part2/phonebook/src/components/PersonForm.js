import React from 'react'
// const buttonStyle = {
//     marginLeft: 5,
//     maxHeight: 20
//   }

//This just determines the usage and format of each button 

const formStyle = {
    marginLeft: 7
}

const PersonForm = ({textInput1, textInput2, submitButton}) => {
    return (
        <form style={formStyle}>
            {textInput1}
            {textInput2}
            <div>
                {submitButton}
            </div>
        </form>
    )
}

export default PersonForm
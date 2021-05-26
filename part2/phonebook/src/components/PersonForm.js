import React from 'react'

//This just determines the usage and format of each button 
const PersonForm = ({textInput1, textInput2, submitButton}) => {
    return (
        <form>
            {textInput1}
            {textInput2}
            <div>
                {submitButton}
            </div>
        </form>
    )
}

export default PersonForm
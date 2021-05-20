import React from 'react'
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
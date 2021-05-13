import React from 'react'
const PersonForm = ({textInput1, textInput2, submitButton}) => {
    return (
        <form>
            {textInput1}
            {textInput2}
        {/* <InputText functionControlChange={handleNameChange} currentInputControl={newName} textDisplay={"name"}/>
        <InputText functionControlChange={handleNumberChange} currentInputControl={newNumber} textDisplay={"number"}/> */}
            <div>
                {submitButton}
          {/* <SubmitButton onClickFunc={addPersons} text={"add"}/> */}
            </div>
        </form>
    )
}

export default PersonForm
const baseUrl = "http://localhost:3001/persons";


//This is simply our abstraction layer to the backend, that's how we will comunicate to the backend, whataever it is

//This downloads all the notes and sends them to the frontend, it's fired at the start of the page
const getAll = async () => {
    const resp = await fetch(baseUrl);
    const data = await resp.json();
    if (resp.status !== 200) {
        throw new Error(`cannot fetch data with error code: ${resp.status}`);
      }  

    return data;
}


//The simple POST method using async, maybe restructuring later into a helper and more general function
const sendNewPersonInfo = async (personInfoObject) => {
    const responseFromServer = await 
        fetch(baseUrl, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(personInfoObject),
        headers:{
        'Content-Type': 'application/json'
        }
    })

    return responseFromServer.json()
}

const allFunctions = {
    getAll,
    sendNewPersonInfo
}

export default allFunctions;
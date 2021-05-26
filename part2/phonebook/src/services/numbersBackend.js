const baseUrl = "http://localhost:3001/persons";

// return methodToBackendReturnJson(`${baseUrl}/${id}`, "PUT", JSON.stringify(newObject));


//This is simply our abstraction layer to the backend, that's how we will comunicate to the backend, whataever it is

//This downloads all the notes and sends them to the frontend, it's fired at the start of the page
const methodToBackendJsonResponse = async (url, method, objectToSend) => {
    const respFromServer = await 
                        fetch(url, {
                        method: method,
                        headers: {
                        'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(objectToSend)
                    })
    return respFromServer.json()
}

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
    const responseFromServer = await methodToBackendJsonResponse(baseUrl, "POST", personInfoObject);
    return responseFromServer;
}

const deletePerson = async personID => {
    const responseFromServer = await methodToBackendJsonResponse(`${baseUrl}/${personID}`, "DELETE", {personID});  
    return responseFromServer;
}

const modifyPersonInfo = async personObject => {
    const responseFromServer = await methodToBackendJsonResponse(`${baseUrl}/${personObject.id}`, "PUT", personObject);  
    return responseFromServer;
}

//Cleaner with object initializer ES2015
const allFunctions = {
    getAll,
    sendNewPersonInfo,
    modifyPersonInfo,
    deletePerson
}

export default allFunctions;
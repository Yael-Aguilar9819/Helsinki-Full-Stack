const baseUrl = 'http://localhost:3001/notes'

//This is the basic method
const methodToBackendReturnJson = async (url, method, body) => {
    const response = await fetch(url, {
                            method: method,
                            headers: {
                              'Accept': 'application/json',
                              'Content-Type': 'application/json'
                            },
                            body: body
                          })
       
    return response.json();
}

const getAll = async () => {
    const resp = await fetch(baseUrl);
    if (resp.status !== 200) {
      throw new Error(`cannot fetch data with error code: ${resp.status}`);
    }
    return resp.json();
}

const create = newObject => {
    return methodToBackendReturnJson(baseUrl, "POST", JSON.stringify(newObject));
}

const update = (id, newObject) => {
    return methodToBackendReturnJson(`${baseUrl}/${id}`, "PUT", JSON.stringify(newObject));
}

const noteServiceAsync = {
    getAll, 
    create, 
    update
}

export default noteServiceAsync
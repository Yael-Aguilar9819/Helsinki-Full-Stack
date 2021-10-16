// const baseUrl = 'https://polar-hamlet-28234.herokuapp.com/api/notes'
const baseUrl = '/api/notes';

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

//This is the basic method
const methodToBackendReturnJson = async (url, method, body, token) => {
    const response = await fetch(url, {
                            method: method,
                            headers: {
                              'Accept': 'application/json',
                              'Content-Type': 'application/json',
                              'Authorization': token
                            },
                            body: body
                          })
  if (response.status !== 200) {
    throw new Error(`cannot fetch data with error code: ${response.status}`);
  }
                               
  return response.json();
}

const getAll = async () => {

  const request = await fetch(baseUrl);
  const nonExisting = {
    id: 10000,
    content: 'This note is not saved to server',
    date: '2019-05-30T17:30:31.098Z',
    important: true,
  }

  const respFormat = await request.json();

  return respFormat.concat(nonExisting);
}


const create = newObject => {
  return methodToBackendReturnJson(baseUrl, "POST", JSON.stringify(newObject), token);
}

const update = (id, newObject) => {
  return methodToBackendReturnJson(`${baseUrl}/${id}`, "PUT", JSON.stringify(newObject), token);
}

const noteServiceAsync = {
    getAll, 
    create, 
    update,
    setToken
}

export default noteServiceAsync
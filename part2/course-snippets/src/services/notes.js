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
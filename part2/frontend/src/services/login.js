const baseUrl = '/api/login'

const login = async credentials => {
    // const response = await axios.post(baseUrl, credentials)
    console.log(credentials)
    const response = 
    await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          'Authorization' : credentials
        })
    return response.data
}

export default { login }
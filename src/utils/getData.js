const API = 'https://rickandmortyapi.com/api/character/'

const getData = async (id) => {
    const apiURL = id ? `${API}${id}` : API
    console.log("apiURL ", apiURL)
    try {
        const response = await fetch(apiURL)
        const data = await response.json()
        return data
    } catch (error) {
        console.log('fetch error ', error);
    }
}

export default getData
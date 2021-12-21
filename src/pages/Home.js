import getData from "../utils/getData"


const Home = async () => {
    const characters = await getData()
    console.log("characters ", characters)
    const view = `
    <div class="characters">
    ${characters.results.map(character => `
        <article class="character-item">
            <a href="#/${character.id}/">
                <img src="${character.image}" alt="${character.name}">
              
            </a>
            <h2>${character.name}</h2>
        </article>
    `).join('')}
       
    </div>
    `
    return view
}

export default Home 
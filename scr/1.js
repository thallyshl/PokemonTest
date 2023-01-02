const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`;
const generatePP = () => Array(80).fill().map((_,index) => 
fetch(getPokemonUrl(index + 1)).then(response => response.json()))

const fetchPokemon = () =>{
const pokemonPro= generatePP()

    Promise.all(pokemonPro)
        .then(pokemons => {
            return pokemons.reduce((accumulator, pokemon) => {
                accumulator += `<li class="card">
                <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
                </li>`
                return accumulator
            }, '')
        
        })
        .then(pokemons => {
            const ul = document.querySelector('[data-js="pokedex"]')
            ul.innerHTML = pokemons
        })
}

fetchPokemon()
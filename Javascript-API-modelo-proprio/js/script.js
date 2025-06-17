const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 5
let offset = 0



const pokemonList = document.getElementById('pokemonList') //OL

function loadPokemonItens(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons = [])=>{
    pokemonList.innerHTML += pokemons.map((pokemon)=> `
            <li class="pokemon ${pokemon.type}">
                <span class="number">${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type)=> `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}"
                    alt="${pokemon.name}">
                </div>
            </li>
            `).join('')
 //Pega(innerHTML) a lista pokemon += mapeia essa lista, converte para html e junta esses li sem separador

 //IGUAL A -> 
 //const newHtml = pokemons.map(converterPokemonHtml).join(' ')
 //pokemonList.innerHTML = newHtml
})
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', ()=> {
    offset += limit
    loadPokemonItens(offset, limit)  
})




 

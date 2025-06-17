function converterPokemonHtml(pokemon){
    return `
            <li class="pokemon">
                <span class="number">${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type)=> `<li class="type">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}"
                    alt="${pokemon.name}" width="100px">
                </div>
            </li>
            `}

const pokemonList = document.getElementById('pokemonList') //OL

pokeApi.getPokemons().then((pokemons = [])=>{
    pokemonList.innerHTML += pokemons.map(converterPokemonHtml).join('')
 //Pega(innerHTML) a lista pokemon += mapeia essa lista, converte para html e junta esses li sem separador

 //IGUAL A -> 
 //const newHtml = pokemons.map(converterPokemonHtml).join(' ')
 //pokemonList.innerHTML = newHtml
})




 

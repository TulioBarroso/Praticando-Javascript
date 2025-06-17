//API COM FETCH
//Convertendo os tipos do pokemon em uma lista
function converterPokemonTypesHtml(pokemonTypes){
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function converterPokemonHtml(pokemon){
    return `
            <li class="pokemon">
                <span class="number">${pokemon.order}</span>
                <span class="name">${pokemon.name}</span>
                
                <div class="detail">
                    <ol class="types">
                        ${converterPokemonTypesHtml(pokemon.types).join('')}
                    </ol>
                    <img src="${pokemon.sprites.other.dream_world.front_default}"
                    alt="${pokemon.name}" width="100px">
                </div>
            </li>
            `}

const pokemonList = document.getElementById('pokemonList') //OL

pokeApi.getPokemons().then((pokemons = [])=>{
    pokemonList.innerHTML += pokemons.map(converterPokemonHtml).join('')
//Pega a lista pokemon (innerHTML) += mapeia essa lista, converte para html e junta esses li sem separador

//IGUAL A -> 
 //const newHtml = pokemons.map(converterPokemonHtml).join(' ')
 //pokemonList.innerHTML = newHtml
})

// const listItens = []

    // //for para pecorrer a lista
    // for (let i = 0; i < pokemons.length; i++) {
    //     const pokemon = pokemons[i];
    //     listItens.push(converterPokemonHtml(pokemon))
    // }
    // console.log(listItens)
// })

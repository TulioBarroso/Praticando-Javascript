//API COM FETCH

function converterPokemonHtml(pokemon){
    return `
            <li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>
                
                <div class="detail">
                    <ol class="types">
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                    </ol>
                </div>
            </li>
            `}

const pokemonList = document.getElementById('pokemonList') //OL

pokeApi.getPokemons().then((pokemons = [])=>{
    pokemonList.innerHTML += pokemons.map(converterPokemonHtml).join('')
//Pega a lista pokemon (innerHTML) += mapeia essa lista, converte para html e junta esses li sem separador
})

// const listItens = []

    // //for para pecorrer a lista
    // for (let i = 0; i < pokemons.length; i++) {
    //     const pokemon = pokemons[i];
    //     listItens.push(converterPokemonHtml(pokemon))
    // }
    // console.log(listItens)
// })

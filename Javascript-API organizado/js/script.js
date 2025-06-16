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

                                
    const newList = pokemons.map((pokemon) => converterPokemonHtml(pokemon))

        //return pokemon.name //return que aparece os nomes do pokemons

    const newHtml = newList.join('') //pegar a nova lista e juntar com os elementos

    pokemonList.innerHTML += newHtml
})

// const listItens = []
        
    // //for para pecorrer a lista
    // for (let i = 0; i < pokemons.length; i++) {
    //     const pokemon = pokemons[i];
    //     listItens.push(converterPokemonHtml(pokemon))
    // }
    // console.log(listItens)
// })

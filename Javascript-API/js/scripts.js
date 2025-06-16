//API com FETCH
//POKE_API https://pokeapi.co/api/v2

const offset = 0 //ponto de partida
const limit = 10 //quantidade de itens 
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function converterPokemonHtml(pokemon){ //Função para converter os dados do pokemon, na estrutura html
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

//Oque o fetch retorna? uma promise(um processamento assincrono, "não tenho" a resposta de imediato)
fetch(url)  //Se o fetch dá certo, chama o .then
     
.then((response)=> response.JSON()) //Converter o body que está em readblestream para json
     
.then((jsonBody)=> jsonBody.results)    

.then((pokemons)=>{
     
     for(let i = 0; i<pokemons.length; i++){ //FOR para pecorrer a lista
          const pokemon = pokemons[i];
          pokemonList.innerHTML += converterPokemonHtml(pokemon)} 
})     

.catch((error)=> console.error(error)) //caso dê algum erro


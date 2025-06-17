
//continuarção codigo 6
//Criação de um objeto para dividir melhor as funções da api

const pokeApi ={}

//convertendo para meu modelo
function converterPokeApiDetailParaPokemon(pokeDetail){
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.order
    pokemon.name = pokeDetail.name
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const[type] = types;
    pokemon.types = types;
    pokemon.type = type;
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;
    return pokemon;
}

pokeApi.getPokemonsDetails = (pokemon) => {
    return fetch(pokemon.url)
            .then((response) => response.json())
            //converter no meu modelo
            .then(converterPokeApiDetailParaPokemon)
    
}



                    //se ngm passar nada, será 0 e 10
pokeApi.getPokemons = (offset=0, limit=6) =>{
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
            .then((response)=>response.json())   //convertendo pra json
            .then((jsonBody) => jsonBody.results) //pegando a lista
            
                    
            .then((pokemons)=>pokemons.map(pokeApi.getPokemonsDetails)) //pegando a lista => mapeando/transformando a lista em uma nova lista de promessas(fetch(pokemon.url)//dos detalhes dos pokemons)
                    
            .then((detailRequests) => Promise.all(detailRequests)) //lista de promessas => esperar que a lista seja resolvida
                    
            .then((pokemonsDetails) => pokemonsDetails)


            .catch((error) => console.error(error))

}


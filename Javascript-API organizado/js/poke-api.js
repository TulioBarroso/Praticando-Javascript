
//continuarção codigo 6
//Criação de um objeto para dividir melhor as funções da api

const pokeApi ={}

pokeApi.getPokemonsDetails = (pokemon) => {   //PEGAR OS DETALHES
    return fetch(pokemon.url).then((response) => response.json())
}
                    //se ngm passar nada, será 0 e 10
pokeApi.getPokemons = (offset=0, limit=10) =>{ //PEGAR A LISTA DE POKEMONS
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
            .then((response)=>response.json())   //convertendo pra json
            .then((jsonBody) => jsonBody.results) //pegando a lista
            
                    
            .then((pokemons)=>pokemons.map(pokeApi.getPokemonsDetails)) //pegando a lista => mapeando/transformando a lista em uma nova lista de promessas(fetch(pokemon.url)//dos detalhes dos pokemons)
                    
            .then((detailRequests) => Promise.all(detailRequests)) //lista de promessas => esperar que a lista seja resolvida
                    
            .then((pokemonsDetails) => pokemonsDetails/*console.log(pokemonsDetails)*/)


            .catch((error) => console.error(error))

}


//continuarção codigo 6
//Criação de um objeto para dividir melhor as funções da api

const pokeApi ={}
                    //se ngm passar nada, será 0 e 10
pokeApi.getPokemons = (offset=0, limit=10) =>{
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
            .then((response)=>response.json())
            .then((jsonBody) => jsonBody.results)
            .catch((error) => console.error(error))

}
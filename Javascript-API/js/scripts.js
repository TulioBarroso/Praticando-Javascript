//API com FETCH
//POKE_API https://pokeapi.co/api/v2

const offset = 0 //ponto de partida
const limit = 10 //quantidade de itens 
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

//Oque o fetch retorna? uma promise(um processamento assincrono, "não tenho" a resposta de imediato)
fetch(url)  //Se o fetch dá certo, chama o .then
.then((response)=>{ //Converter o body que está em readblestream para json
     return response.JSON()
})
.then((jsonBody)=>{
    console.log(jsonBody)
}) 
.catch((error)=>{ //caso dê algum erro
      console.error(error) 
})


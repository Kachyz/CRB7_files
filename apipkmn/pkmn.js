// 1) imprimir el nombre del pokemon seguido de sus tipos
//     Pikachu - electrico

// 2) dado un pokemon imprimir sus evoluciones
//     charmander - charmeleon - charizard

// 3) hacer una lista con todos los nombres de pokemon

// Alexis: Honchkrow
// Alan: Blaziken
// Jose: Quagsire
// Luis: Charizard

let request = require('request'); //require == import

function tiposPokemon(miPokemon){
  // request.get(<URL>, <CB>)
  let URL = "https://pokeapi.co/api/v2/pokemon/" + miPokemon
  request.get(URL, (error, response, body) => {
    let pkmnInfo = JSON.parse(body)
    // Nombre del pokemon
    let name = pkmnInfo.name
    // Tipo(s) del pokemon
    let allTypes = pkmnInfo.types.map( tipo => tipo.type.name )

    console.log(`Mi nombre es ${name} y mi tipo es ${ allTypes.join(' / ') }`)
  })
}

tiposPokemon('quagsire')
tiposPokemon('pikachu')
tiposPokemon('ditto')
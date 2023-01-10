import { getPokemon } from "./Generics/getPokemon";
import { Pokemon } from "./decoradores/pokemon-class";

getPokemon(4)
  .then(res => console.log(res.abilities))
  .catch(err => console.log(err))

const charmander = new Pokemon('charmander')
console.log(charmander.savePokemonToDB(4));

// (Pokemon.prototype as any).custonName = 'Pikachu'

//factory decorators




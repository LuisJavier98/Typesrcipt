import { getPokemon } from "./Generics/getPokemon";

getPokemon(4)
  .then(res => console.log(res))
  .catch(err => console.log(err))
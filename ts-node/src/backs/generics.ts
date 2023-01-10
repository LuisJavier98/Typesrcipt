// //import { Hero as SuperHero , Hero2 } from "./classes/ero";
// import * as HeroClasses from "./classes/ero"
// import  powers  from "./data/powers";
// const Hero = 123;
// const ironman = new HeroClasses.Hero('ironman', 1, 55)
// console.log(ironman)

import { Hero, Villian } from "../interfaces"




import { genericFunction, genericFunctionArrow, printObject } from "../Generics/generics";

// // console.log(powers)

// printObject(123)
// printObject(new Date)
// printObject({ a: 1 })
// printObject(123)

// console.log(
//   genericFunction(3.1415.toFixed(2)),
//   genericFunction('Hola muendo'.toUpperCase),
//   genericFunctionArrow(3.14).toFixed(2)
// )

const deadpool = {
  name: 'deadpool',
  realName: 'Wade',
  dangerLeve: 130
}
console.log(genericFunction<Hero>(deadpool).name)




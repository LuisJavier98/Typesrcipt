"use strict";
const hero = {
    name: 'iron',
    age: 45
};
console.log(hero.age);
const a = 10;
let b = true;
let c;
b = false;
function sayhello(msg) {
    console.log(msg);
}
(() => {
    const a = 10;
    console.log(a);
})();

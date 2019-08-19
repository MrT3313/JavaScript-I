// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();

let myFunction = () => {

}

// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");

let anotherFunction = (param) => {
    return param
}
console.log(anotherFunction("Hello"))

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);

let add = (a,b) => {
    return a + b
}
console.log(add(2,3))

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

let subtract = (a,b) => {
    return a - b
}
console.log(subtract(3,5))

// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);

let triple = (array) => {
    let newArray = array.map( item => {
        return item * 3
    })
return newArray}

console.log(triple([1,2,3,4]))
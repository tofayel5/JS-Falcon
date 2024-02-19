/**
 *   ---- Returning a value ----
 * Every function in js implicitly returns undefined unless, explicitly specify a return value.
 */

function say(msg) {
    console.log('msg: : ', msg);
}
let result = say('Hello!');
console.log('result: ', result); // undefined

function add(a, b) {
    return a + b ;
}
let sum = add(10, 50);
console.log('sum: ', sum);

/**
 *   ---- The arguments object ----
 * Inside a function, you can access an object called arguments that represents the named arguments of the function.
 * The arguments object behaves like an array though it is not an instance of the Array type.
 */

function total() {
    console.log('arguments: ', arguments); // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    
    }
    return sum;
}
console.log(total(1, 2, 3, 4, 5)); // 15

/**
 *   ---- Passing a function to another function ----
 * Because functions are values, you can pass a function as an argument into another function.
 */

function adds(a, b) {
    return a + b;
}
let sum1 = adds;
function average(a, b, fn) {
    return fn(a, b) / 2;
}
let results = average(10, 20, sum1);
console.log('results: ', results);
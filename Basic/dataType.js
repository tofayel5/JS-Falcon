/**
    JavaScript is a dynamically typed language, meaning that a variable isn't associated with a specific type.
    In other word, a variable can hold a value of different type.

    JavaScript has 7 primitive data type.
     1. null
     2. undefine
     3. boolean
     4. string  
     5. number
     6. symbol -ES2015 
     7. bigint -ES2020

    JavaScript complex(reference to its value) data type
     1. object
     2. array
     3. function
 */

    /**
     * The null type.
     * 
     * The type of obj returns object is a known bug in js.
     */
    let obj = null;
    console.log('null type: ', obj, typeof obj); // null object

    /**
     * The undefined type.
     * 
     * When a variable is declared but not initialized,
       its default value is undefined.
     */
    let firstName;
    let lastName = undefined;
    console.log('undefine type: ', firstName, lastName, typeof firstName); // undefined undefined undefined

    /**
     * The boolean type.
     * 
     * Using Boolean() function, to convert values of other types into boolean value.
     */
    let inProgress = true;
    let done = false;
    console.log('boolean type: ', inProgress, done, typeof inProgress); // true false boolean

    console.log('string Boolean: ', Boolean('Hello'), Boolean('')); // true false
    console.log('number Boolean: ', Boolean(10), Boolean(Infinity), Boolean(0), Boolean(NaN)); // true true false false
    console.log('object Boolean: ', Boolean({key: 10}), Boolean(null)); // true false
    console.log('undefine Boolean: ', Boolean(undefined)); // false
    
    /**
     * The string type.
     * 
     * string literal can be ' ' or " "
     */
    let message = 'Hello';
    let str = "Hi";
    console.log('string type: ', message, str, typeof message); // Hello Hi string

    /**
     * The number type.
     * 
     * use number type to represent both integer and floating-point numbers.
     */
    let price = 100;
    let discount = 0.75;
    let total = 99.25;
    console.log('number type: ', price, discount, total,  typeof price, typeof total); // 100 0.75 99.25 number number

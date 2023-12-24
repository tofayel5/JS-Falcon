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
 **/

    /*
    * The null type.
    * The type of obj returns object is a known bug in js.
    **/
    let obj = null;
    console.log('null type: ', obj, typeof obj); // null object

    // The undefined type
    let firstName;
    let lastName = undefined;
    console.log('undefine type: ', firstName, lastName, typeof firstName); // undefined undefined undefined
    /* When a variable is declared but not initialized, its default value is undefined. */

    // The boolean type
    let inProgress = true;
    let done = false;
    console.log('boolean type: ', inProgress, done, typeof inProgress); // true false boolean
    /* Using Boolean() function, to convert values of other types into boolean value */
    console.log('string Boolean: ', Boolean('Hello'), Boolean('')); // true false
    console.log('number Boolean: ', Boolean(10), Boolean(Infinity), Boolean(0), Boolean(NaN)); // true true false false
    console.log('object Boolean: ', Boolean({key: 10}), Boolean(null)); // true false
    console.log('undefine Boolean: ', Boolean(undefined)); // false
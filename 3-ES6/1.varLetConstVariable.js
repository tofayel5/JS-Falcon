/**
 * var: Local and global scope variable.
 * let: Block-scoped variables.
 * const: Block-scoped and read-only reference to a value.The block-scoped variables declared by the const keyword can’t be reassigned.
 */

    /**
     * var 
     * The scope of the variable is either global or local.
     * If variable inside the function, the scope of the variable is local. When outside the function its global.
     */

    // Local scope
    function increase() {
        var counter = 10;
        console.log('inside fn, counter: ', counter) // 10
    }
    // console.log('outside fn, counter: ', counter) // counter is not defined
    // Global scope
    var sum = 0;
    // console.log(window.sum); //  0
    // Redeclare
    var discount = 10;
    var discount;
    console.log('discount: ', discount); // 10
    // block scope
    var x = 10;
    if(x === 10) { 
        console.log('inside block, x: ', x); // 10
    }
    console.log('outside block, x: ', x); // 10
    // block scope
    var y = 10;
    if(y === 10) { 
        var y = 20;
        console.log('inside block, y: ', y); // 20
    }
    console.log('outside block, y: ', y); // 20


    /**
     * let
     * Block-scoped variables.
     * blocks are denoted by curly braces {} , for example, the if else, for, do while, while, try catch and so on.
     */
    let price = 10;
    if (price === 10) {
        let price = 20;
        console.log('inside block scope, price: ', price); // 20:  reference x inside the block
    }
    console.log('outside block scope, price: ', price); // 10: reference at the beginning of the script
    // Global
    let b = 20;
    // console.log(window.b); // undefined
    let total = 100; 
    {
        let total = 200;
    }


    /**
     * const
     * const CONSTANT_NAME = value; 
     * with object
     * with array
     */
    const RATE = 0.1;
    // RATE = 0.2; // TypeError
    // const RED; // SyntaxError

    // const and object
    const person = { age: 20 };
    person.age = 30; // OK
    console.log(person.age); // 30
    // person = { age: 40 }; // TypeError
    // value of object to be immutable.
    const person1 = Object.freeze({age: 20}); 
    // person1.age = 30; // TypeError 


    // const and array
    const colors = ['red'];
    colors.push('green');
    console.log(colors); // ["red", "green"]

    colors.pop();
    colors.pop();
    console.log(colors); // []
    // colors = []; // TypeError

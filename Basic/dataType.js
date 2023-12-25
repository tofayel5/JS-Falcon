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
 */

    /**
     * The null type.
     * 
     * The type of obj returns object is a known bug in js.
     * Object wrapper: N/A
     */
    let obj = null;
    console.log('null type: ', obj, typeof obj); // null object

    /**
     * The undefined type.
     * 
     * When a variable is declared but not initialized,
       its default value is undefined.
     * Object wrapper: N/A
     */
    let firstName;
    let lastName = undefined;
    console.log('undefine type: ', firstName, lastName, typeof firstName); // undefined undefined undefined

    /**
     * The boolean type.
     * 
     * Using Boolean() function, to convert values of other types into boolean value.
     * Object wrapper: Boolean()
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
     * string literal can be ' ' or " ".
     * Object wrapper: String().
     */
    let message = 'Hello';
    let str = "Hi";
    console.log('string type: ', message, str, typeof message); // Hello Hi string

    /**
     * The number type.
     * 
     * use number type to represent both integer and floating-point numbers.
     * Object wrapper: Number().
     */
    let price = 100;
    let discount = 0.75;
    let total = 99.25;
    console.log('number type: ', price, discount, total,  typeof price, typeof total); // 100 0.75 99.25 number number

    /**
     * The Symbol type.
     * 
     * ES6 introduce a new primitive type call symbol.
     * The Symbol function create a new unique value every time it call.
     * Unlike other primitive type, the symbol type does not have a literal form.
     * Object wrapper: Symbol().
     */
    let sym1 = Symbol('Hi');
    let sym2 = Symbol('Hi')
    console.log('symbol type: ', sym1 === sym2, typeof sym1); // false symbol

    /**
     * The bigint type.
     * 
     * ES2020 introduce a new primitive type call bigint.
     * BigInt allows to represent whole numbers larger than 2^53 - 1.
     * Object wrapper: BigInt().
     */
    let amount = 9007199254740991n;
    let grandTotal = BigInt(9007199254740991);
    console.log('symbol type: ', amount, grandTotal, typeof amount, typeof grandTotal); // 9007199254740991n 9007199254740991n bigint bigint

    /**
     * The Object type.
     * 
     * An object is a collection of properties, where each property is define a a key-value pair.
     * A property of object can hold an object.
     * To access an object's property, we can use,
     * dot notation(.)
     * array-like notation([])
     */
    let contact = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '(408)-555-9999',
      address: {
          building: '4000',
          street: 'North 1st street',
          city: 'San Jose',
          state: 'CA',
          country: 'USA'
      }
  }
  console.log('object type: ', contact.firstName, contact['phone']); // John (408)-555-9999
  console.log('object type nested: ', contact.address.building, contact['address'].city); // 4000 San Jose
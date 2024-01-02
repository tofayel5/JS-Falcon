/**
 * Array.prototype.unshift() method.
 * add one or multiple elements to the beginning of an array.
 * Because the unshift() method needs to re-index the existing elements, it is slow if the array has many elements.
 * 
 * unshift(element1)
 * unshift(element1, element2, ........, elementN)
 * 
 * Parameters: element1 / element2, ........, elementN.
 * Return: The new length of the array.
 */

   /**
    * Add single or multiple elements to the beginning of an array.
    */
   const numbers = [10, 20, 30];
   console.log('numbers: ', numbers, numbers.length); // [ 10, 20, 30 ] 3

   const newLengthSingle = numbers.unshift(40);
   console.log('numbers: ', numbers, newLengthSingle, numbers.length); // [ 40, 10, 20, 30 ] 4 4

   const newLengthMulti = numbers.unshift(50, 60, 70);
   console.log('numbers: ', numbers, newLengthMulti, numbers.length); // [ 50, 60, 70, 40, 10, 20, 30] 7 7

   /**
    * Merging two arrays.
    * 1. using ES6 spread syntax (...).
    * 2. using for...of loop.
    */
   // 1. using spread syntax.
   const oddNumbers = [1, 3, 5];
   const evenNumbers = [2, 4, 6];
   oddNumbers.unshift(...evenNumbers); // spread syntax.
   console.log('merged list: ', oddNumbers, evenNumbers); // [ 2, 4, 6, 1, 3, 5 ] [ 2, 4, 6 ]

   // 2. using for...of loop.
   let colors = ['red', 'green', 'blue'];
   let cmyk = ['cyan', 'magenta'];
   for (const color of cmyk) {
    colors.unshift(color);
   }
   console.log('colors: ', colors); // [ 'magenta', 'cyan', 'red', 'green', 'blue' ]

   /**
    * Array unshift() method with array-like objects.
    * Array.prototype.unshift() method is generic. 
      Therefore, we can call the unshift() method with the call() or apply() on the array-like objects.
    */
      let greetings = {
        0: 'Hi',
        1: 'Hello',
        length: 2,
        prepend(message) {
          [].unshift.call(this, message);
        }
      };
      greetings.prepend('Howdy');
      greetings.prepend('Bonjour');
      console.log('greetings: ', greetings); // { '0': 'Bonjour', '1': 'Howdy', '2': 'Hi', '3': 'Hello', length: 4, prepend: [Function: prepend] }
      


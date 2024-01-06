/**
 * Array.prototype.push() method.
 * add one or multiple elements to the end of an array.
 * 
 * push()
 * push(element1)
 * push(element1, element2, ........, elementN)
 * 
 * Parameters: element1 / element2, ........, elementN.
 * Return: The new length of the array.
 */

   /**
    * Add single or multiple elements to the end of an array.
    */
   const numbers = [10, 20, 30];
   console.log('numbers: ', numbers, numbers.length); // [ 10, 20, 30 ] 3

   const newLengthSingle = numbers.push(40);
   console.log('numbers: ', numbers, newLengthSingle, numbers.length); // [ 10, 20, 30, 40 ] 4 4

   const newLengthMulti = numbers.push(50, 60, 70);
   console.log('numbers: ', numbers, newLengthMulti, numbers.length); // [ 10, 20, 30, 40, 50, 60, 70 ] 7 7

   /**
    * Merging two arrays.
    * 1. using ES6 spread syntax (...).
    * 2. using for...of loop.
    */
   // 1. using spread syntax.
   const oddNumbers = [1, 3, 5];
   const evenNumbers = [2, 4, 6];
   oddNumbers.push(...evenNumbers); // spread syntax.
   console.log('merged list: ', oddNumbers, evenNumbers); // [ 1, 3, 5, 2, 4, 6 ] [ 2, 4, 6 ]

   // 2. using for...of loop.
   let colors = ['red', 'green', 'blue'];
   let cmyk = ['cyan', 'magenta'];
   for (const color of cmyk) {
    colors.push(color);
   }
   console.log('colors: ', colors); // [ 'red', 'green', 'blue', 'cyan', 'magenta' ]

   /**
    * Array push() method with array-like objects.
    * Array.prototype.push() method is generic. 
      Therefore, we can call the push() method with the call() or apply() on the array-like objects.
    * push() method uses the length property to determine the position for inserting the elements.
      If the push() method cannot convert the length property into a number, it’ll use 0 as the value for the index.
    */
      let greetings = {
        0: 'Hi',
        1: 'Hello',
        length: 2,
        append(message) {
          [].push.call(this, message);
        }
      };
      greetings.append('Howdy');
      greetings.append('Bonjour');
      console.log('greetings: ', greetings); // { '0': 'Hi', '1': 'Hello', '2': 'Howdy', '3': 'Bonjour', length: 4, append: [Function: append] }
      


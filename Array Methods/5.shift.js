/**
 * Array.prototype.shift() method.
 * Remove the first  element from an array and change the length property of the array.
 * Return the removed element.
 * shift()
 * 
 * Parameters: None.
 * Return: The removed element from the array; undefined if the array is empty.
 */

    /**
    * Remove elements to the beginning of an array.
    * undefined if the array is empty.
    */
    const numbers = [10, 20, 30];
    console.log('numbers: ', numbers, numbers.length); // [ 10, 20, 30 ] 3
 
    const newLengthSingle = numbers.shift();
    console.log('numbers: ', numbers, newLengthSingle, numbers.length); // [ 20, 30 ] 10 2
 
    const emptyArray = [];
    const removeItem = emptyArray.shift();
    console.log('emptyArray: ', emptyArray, removeItem, emptyArray.length); // [ ] undefined 0
 
    /**
     * Array shift() method with array-like objects.
     * Array.prototype.shift() method is generic. 
       Therefore, we can call the shift() method with the call() or apply() on the array-like objects.
     */
       let greetings = {
         0: 'Hi',
         1: 'Hello',
         2: 'Howdy',
         length: 3,
         removeLast() {
           return [].shift.call(this);
         }
       };
       let greeting = greetings.removeLast();
       console.log('greeting: ', greeting); // 'Hi'
       console.log('greetings: ', greetings); // { '0': 'Hello', '1': 'Howdy', length: 2, removeLast: [Function: removeLast] }
 
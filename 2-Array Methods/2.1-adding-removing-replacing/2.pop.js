/**
 * Array.prototype.pop() method.
 * Remove the last element from an array and change the length property of the array.
 * Return the removed element.
 * pop()
 * 
 * Parameters: None.
 * Return: The removed element from the array; undefined if the array is empty.
 */

    /**
    * Remove elements to the end of an array.
    * undefined if the array is empty.
    */
    const numbers = [10, 20, 30];
    console.log('numbers: ', numbers, numbers.length); // [ 10, 20, 30 ] 3
 
    const newLengthSingle = numbers.pop();
    console.log('numbers: ', numbers, newLengthSingle, numbers.length); // [ 10, 20 ] 30 2
 
    const emptyArray = [];
    const removeItem = emptyArray.pop();
    console.log('emptyArray: ', emptyArray, removeItem, emptyArray.length); // [ ] undefined 0
 
    /**
     * Array pop() method with array-like objects.
     * Array.prototype.pop() method is generic. 
       Therefore, we can call the pop() method with the call() or apply() on the array-like objects.
     * pop() uses the length property of the array-like object to determine the last element to remove.
     */
       let greetings = {
         0: 'Hi',
         1: 'Hello',
         2: 'Howdy',
         length: 3,
         removeLast() {
           return [].pop.call(this);
         }
       };
       let greeting = greetings.removeLast();
       console.log('greeting: ', greeting); // 'Howdy'
       console.log('greetings: ', greetings); // { '0': 'Hi', '1': 'Hello', length: 2, removeLast: [Function: removeLast] }
/**
 * Array.prototype.findIndex() method.
 * The findIndex() method returns the index of the first element in an array that satisfies the provided testing function.
 * If no elements satisfy the testing function, -1 is returned.
 * The findIndex() method is an iterative method. It calls a provided callbackFn function once for each element 
   in an array in ascending-index order, until callbackFn returns a truthy value. 
 * 
 * findIndex(callbackFn)
 * findIndex(callbackFn, thisArg)
 * 
 * Parameters: callbackFn(element , index, array), thisArg(optional).
 * Return: The index of the first element in the array that passes the test. Otherwise, -1.
 */

    // find index in simple array.
    const numbers = [10, 20, 30, 40, 20, 60, 30, 80];
    const result1 = numbers.findIndex((number, index) => number === 30); 
    const result2 = numbers.findIndex((number, index) => (number === 30 && index > 2)); 
    console.log('result: ', result1, result2); // 2 6
    
    // find index in array of objects using arrow function and destructuring.
    const students = [
      {id: 1, name: 'Jasim', age: 15},
      {id: 2, name: 'Selim', age: 20},
      {id: 3, name: 'Tanvir', age: 15},
      {id: 4, name: 'banalata sen', age: 19},
      {id: 5, name: 'Kabir', age: 13}
    ];
    const student1 = students.findIndex(item => item.id === 3);
    const student2 = students.findIndex(({id}) => id === 5);
    console.log('result: ', student1, student2); //  2 4


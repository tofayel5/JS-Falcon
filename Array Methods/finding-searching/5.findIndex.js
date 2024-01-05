/**
 * Array.prototype.findIndex() method.
 * The findIndex() method returns the first element in an array that passes a test function.
 * If no values satisfy the testing function, undefined is returned.
 * The findIndex() method is an iterative method. It calls a provided callbackFn function once for each element 
   in an array in ascending-index order, until callbackFn returns a truthy value. 
 * 
 * findIndex(callbackFn)
 * findIndex(callbackFn, thisArg)
 * 
 * Parameters: callbackFn(element , index, array), thisArg(optional).
 * Return: The first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
 */

   // find an object by id
   const students = [
    {id: 1, name: 'Jasim', age: 15},
    {id: 2, name: 'Selim', age: 20},
    {id: 3, name: 'Tanvir', age: 15},
    {id: 4, name: 'banalata sen', age: 19},
    {id: 5, name: 'Kabir', age: 13}
];
function getStudentById(element, index, array) {
    // console.log('student: ', element, index, array);
    return element.id = 4
}
const student = students.find(getStudentById)
console.log('student: ', student);

// Using arrow function and destructuring.
const result1 = students.find(item => item.id === 3);
const result2 = students.find(({id}) => id === 5);
console.log('result: ', result1, result2); //  { id: 3, name: 'Tanvir', age: 15 } { id: 5, name: 'Kabir', age: 13 }


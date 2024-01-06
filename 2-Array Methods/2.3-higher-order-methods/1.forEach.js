/**
 * Array.prototype.forEach() method.
 * The forEach() method of Array instances executes a provided function once for each array element.
 * The forEach() method is an iterative method. It calls a provided callbackFn function once for each element 
   in an array in ascending-index order.
 * There is no way to stop or break a forEach() loop other than by throwing an exception. 

 * forEach(callbackFn)
 * forEach(callbackFn, thisArg)
 * 
 * Parameters: callbackFn(element , index, array), thisArg(optional).
 * Return: None (undefined).
 */
    // iteration in simple array.
    const ranks = ['A', 'B', 'C'];
    ranks.forEach(function (rank) {
        console.log('rank: ', rank); // 'A', 'B', 'C'
    });
    // iteration in array of objects using arrow function.
    const results = [];
    const students = [
      {id: 1, name: 'Jasim', age: 15},
      {id: 2, name: 'Selim', age: 20},
      {id: 3, name: 'Tanvir', age: 15},
      {id: 4, name: 'banalata sen', age: 19},
      {id: 5, name: 'Kabir', age: 13}
    ];
    students.forEach(item => {
        if(item.id > 3) {
            results.push(item);
        }
    })
    console.log('results: ', results); //  [{ id: 4, name: 'banalata sen', age: 19 }, { id: 5, name: 'Kabir', age: 13 }]


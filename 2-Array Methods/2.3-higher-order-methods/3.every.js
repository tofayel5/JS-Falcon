/**
 * Array.prototype.every() method.
 * Determining If All Array Elements Pass a Test, It returns a Boolean value.
 * The every() method is an iterative method. It calls a provided callbackFn function once for each element in an array,
   until the callbackFn returns a falsy value. If such an element is found, every() immediately returns false and stops iterating through the array.
   Otherwise, if callbackFn returns a truthy value for all elements, every() returns true. 
 * 
 * every(callbackFn)
 * every(callbackFn, thisArg)
 * 
 * Parameters: callbackFn(element , index, array), thisArg(optional).
 * Return: true unless callbackFn returns a falsy value for an array element, in which case false is immediately returned.
 */

     // Check if an element exists in the array.
     function isExits(value, arrList) {
        return arrList.every(el => el > value);
     }
     const numbers = [10, 20, 30, 40, 20, 70];

     let result1 = isExits(1, numbers);
     let result2 = isExits(20, numbers);
     console.log('result: ', result1, result2); // true false

     // Using thisArg(optional).
     const range = { min: 30, max:70 };
     let result3 = numbers.every(function(el) {
        // console.log('this: ', this); // { min: 30, max: 70 }
        return (el >= this.min && el <= this.max);
     }, range)
     console.log('result: ', result3); // false

    // In array of object.
     const students = [
        {id: 1, name: 'Jasim', age: 15},
        {id: 2, name: 'Selim', age: 20},
        {id: 3, name: 'Tanvir', age: 15},
        {id: 4, name: 'banalata sen', age: 19},
        {id: 5, name: 'Kabir', age: 13}
      ];
      let student = students.every(element => element.age > 10);
      console.log('student: ', student); // true

    // empty array
     let gtZero = [].every(element => element > 0); // any condition
     let ltZero = [].every(element => element < 0); // any condition
     console.log('gtZero:', gtZero); // true
     console.log('ltZero:', ltZero); // true
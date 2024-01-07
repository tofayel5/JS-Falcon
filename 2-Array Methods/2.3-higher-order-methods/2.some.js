/**
 * Array.prototype.some() method.
 * To check if an array has at least one element that meets a specified condition.if exists return true, otherwise false.
 * The some() method is an iterative method. 
 * 
 * some(callbackFn)
 * some(callbackFn, thisArg)
 * 
 * Parameters: callbackFn(element , index, array), thisArg(optional).
 * Return: false, unless callbackFn returns true.
 */

     // Check if an element exists in the array.
     function isExits(value, arrList) {
        return arrList.some(el => el === value);
     }
     const numbers = [10, 20, 30, 40, 20, 70];

     let result1 = isExits(20, numbers);
     let result2 = isExits(50, numbers);
     console.log('result: ', result1, result2); // true false

     // Using thisArg(optional).
     const range = { min: 30, max:70 };
     let result3 = numbers.some(function(el) {
        // console.log('this: ', this); // { min: 30, max: 70 }
        return (el >= this.min && el <= this.max);
     }, range)
     console.log('result: ', result3); // true
     
    // In array of object.
     const students = [
        {id: 1, name: 'Jasim', age: 15},
        {id: 2, name: 'Selim', age: 20},
        {id: 3, name: 'Tanvir', age: 15},
        {id: 4, name: 'banalata sen', age: 19},
        {id: 5, name: 'Kabir', age: 13}
      ];
      let student = students.some(element => element.age > 18);
      console.log('student: ', student); // true
/**
 * Array.prototype.includes() method.
 * To check if an element is in an array. if exists return true, otherwise false.
 * 
 * includes(searchElement)
 * includes(searchElement, fromIndex) => fromIndex < 0, fromIndex + array.length.
 * 
 * to search elements of the array using the SameValueZero algorithm. 
 * -0 is equal to 0, but false is not same as 0. 
 * NaN && undefined can be correctly searched for.
 * 
 * Parameters: searchElement, fromIndex(optional, Zero-based index).
 * Return: boolean (true/false) value.
 */

     /**
     * Using of includes() method.
     * 1. With out fromIndex.
     * 2. With fromIndex.
     * 3. fromIndex is greater than or equal to the array length.
     * 4. fromIndex index is less than or equal to 0.
     * 5. Using includes() on sparse arrays.
     */
     const numbers = [10, 20, 30, 40, NaN, undefined];
     // 1. With out fromIndex.
     let result1 = numbers.includes(20);
     let result2 = numbers.includes(5);
     console.log('result: ', result1, result2); // true false

     let result3 = numbers.includes(undefined);
     let result4 = numbers.includes(NaN);
     console.log('result: ', result3, result4); // true true

     // 2. With fromIndex.
     let result5 = numbers.includes(20, 3);
     let result6 = numbers.includes(20, -3);
     console.log('result: ', result5, result6); // false false

     // 3. fromIndex is greater than or equal to the array length.
     const arrList = ["a", "b", "c"];
     let test1 = arrList.includes('b', 3);
     let test2 = arrList.includes('b', 100);
     console.log('test: ', test1, test2); // false false

     // 4. If fromIndex index is less than or equal to 0, the entire array will be search.
     let test3 = arrList.includes('b', -100);
     let test4 = arrList.includes('b', -2);
     console.log('test: ', test3, test4); // true true

     // 5. Using includes() on sparse arrays.
     const items = [1, ,2, 4];
     console.log(items.includes(undefined)); // true
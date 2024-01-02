/**
 * Array.prototype.slice() method.
 * The slice() method returns a shallow copy of a portion of an array into a new array objects.
 * The slice () method from a given start, up to a (not inclusive) given end.
 * The original array will not be modified.
 * 
 * slice()
 * slice(start) => from start(index) to length - 1.
 * slice(start, end) => from start(index) to end(index) -1.
 * 
 * Parameters: start, end.[both are optional]
 * Return: A new array containing the extracted element.
 * 
 * parameters can be negative index which is start from end of index.
 * if start < 0, start + array.length is used.
 * if end < 0, end + array.length is used.
 */

    /**
     * Return a portion of an existing array.
     * 
     * without parameters && Clone an array.
     * only start parameters.
     * with positive parameters.
     * with negative parameters.
     */
    const numbers = [1, 2, 3, 4, 5];
    const result1 = numbers.slice(); // without parameters && Clone an array.
    const result2 = numbers.slice(3); // only start parameters.
    const result3 = numbers.slice(1, 3); // positive parameters.
    const result4 = numbers.slice(-3, -1); // negative parameters.
    console.log('numbers: ', numbers); // [ 1, 2, 3, 4, 5 ]
    console.log('result1: ', result1, result1===numbers); // [ 1, 2, 3, 4, 5 ] false
    console.log('result2: ', result2); // [ 4, 5 ]
    console.log('result3: ', result3); // [ 2, 3 ]
    console.log('result4: ', result4); // [ 3, 4 ]

    /**
     * Calling slice() on non-array objects.
     */
    const arrayLike = {
        length: 3,
        0: 2,
        1: 3,
        2: 4,
        3: 33
    };
    const newArr = Array.prototype.slice.call(arrayLike, 1, 3);
    console.log('newArr: ', newArr); // [ 3, 4 ]

    /**
     * Convert array-like objects into arrays.
     */
    const slice = Function.prototype.call.bind(Array.prototype.slice);
    function list() {
    return slice(arguments);
    }
    const convertedArr = list(1, 2, 3); 
    console.log('convertedArr: ', convertedArr); // [ 1, 2, 3 ]

    
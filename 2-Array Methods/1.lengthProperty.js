/**
 * Array length property represent the number of elements in that array.
 * The value is an unsigned.
 * 32 bit integer number that always greater than the highest index in the array. 
 */

    const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];
    const list = new Array(10);
    console.log('array length: ', clothing.length, list.length); // 4 10

    /**
     * Sparse array and make array sparse.
     * The length property doesn't indicate the actual number of elements.
     */

    const numbers = [10, 20, ,50];
    console.log('numbers length: ', numbers.length); // 4

    const evenNumbers = [2, 4, 6, 8];
    evenNumbers.length = 10;
    console.log('even Numbers: ', evenNumbers); // [ 2, 4, 6, 8, <6 empty items> ]

    /**
     * Make empty an array.
     * if set length to 0, the array will be empty.
     */
    const fruits = ['Apple', 'Orange', 'Strawberry'];
    fruits.length = 0;
    console.log('fruits length: ', fruits); // []

    /**
     * Remove array elements.
     * if array length is less than the highest index, 
       all the elements whose index is greater than or equal to new length are removed.
     */
    const arrList = [1, 2, 3, 4, 5];
    if (arrList.length > 3) {
    arrList.length = 3;
    }
    console.log('arrList: ', arrList); // [1, 2, 3]
    console.log('arrList length: ', arrList.length); // 3
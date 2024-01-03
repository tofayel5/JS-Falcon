/**
 * Array.prototype.indexOf() method.
 * To find the first position (index) of an element in an array.
 * It's returns the first index at which a given element can be found in the array, or -1 if it is not present.
 * 
 * indexOf(searchElement)
 * indexOf(searchElement, fromIndex) => fromIndex < 0, fromIndex + array.length.
 * 
 * compares searchElement to elements of the array using strict equality algorithm.
 * NaN values are never compared as equal, so indexOf() always returns -1 when searchElement is NaN.
 * 
 * Parameters: searchElement, fromIndex(optional, Zero-based index at which to start searching).
 * Return: The first index of searchElement in the array; -1 if not found.
 */
    /**
     * Using indexOf().
     * 1. With out fromIndex.
     * 2. With fromIndex.
     */
    const numbers = [10, 20, 30, 40, 20, 60, 30, 80];

    // 1. With out fromIndex.
    const result1 = numbers.indexOf(30);
    console.log('result1: ', result1); // 2

    const result2 = numbers.indexOf(100);
    console.log('result2: ', result2); // -1

    // 2. With fromIndex.
    const result3 = numbers.indexOf(30, 3);
    console.log('result3: ', result3); // 6

    const result4 = numbers.indexOf(20, -2);
    console.log('result4: ', result4); // -1

    /**
     * 1.Using indexOf() to search for NaN.
     * 2.Using indexOf() on sparse array.
     */
    const weekDay = ['Sun', 'Mon', ,'Tue', ,'sat', NaN];

    // 1.use indexOf() to search for NaN..
    const test1 = weekDay.indexOf(NaN);
    console.log('test1: ', test1); // -1

    // 2.Using indexOf() on sparse arrays.
    const test2 = weekDay.indexOf(undefined);
    console.log('test2: ', test2); // -1
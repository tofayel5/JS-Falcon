/**
 * Array.prototype.lastIndexOf() method.
 * To find the last position (index) of an element in an array.
 * It's returns the last index at which a given element can be found in the array, or -1 if it is not present.
 * 
 * lastIndexOf(searchElement)
 * lastIndexOf(searchElement, fromIndex) => fromIndex < 0, fromIndex + array.length.
 * 
 * compares searchElement to elements of the array using strict equality algorithm.
 * NaN values are never compared as equal, so lastIndexOf() always returns -1 when searchElement is NaN.
 * 
 * Parameters: searchElement, fromIndex(optional, Zero-based index at which to start searching backwards).
 * Return: The last index of searchElement in the array; -1 if not found.
 */
    /**
     * Using lastIndexOf().
     * 1. With out fromIndex.
     * 2. With fromIndex.
     */
    const numbers = [10, 20, 30, 40, 20, 60, 30, 80];

    // 1. With out fromIndex.
    const result1 = numbers.lastIndexOf(30);
    console.log('result1: ', result1); // 6

    const result2 = numbers.lastIndexOf(100);
    console.log('result2: ', result2); // -1

    // 2. With fromIndex.
    const result3 = numbers.lastIndexOf(30, 3);
    console.log('result3: ', result3); // 2

    const result4 = numbers.lastIndexOf(20, -2);
    console.log('result4: ', result4); // 4

    /**
     * 1.Using lastIndexOf() to search for NaN.
     * 2.Using lastIndexOf() on sparse arrays.
     */
    const weekDay = ['Sun', 'Mon', ,'Tue', ,'sat', NaN];

    // 1.use lastIndexOf() to search for NaN..
    const test1 = weekDay.lastIndexOf(NaN);
    console.log('test1: ', test1); // -1

    // 2.Using lastIndexOf() on sparse arrays.
    const test2 = weekDay.lastIndexOf(undefined);
    console.log('test2: ', test2); // -1
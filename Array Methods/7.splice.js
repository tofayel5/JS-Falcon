/**
 * Array.prototype.splice() method [Delete, Insert, Replace].
 * The splice() method change the contents of an array by removing, replacing existing elements, adding new elements.
 * The splice() method is a mutating method. 
 * 
 * splice(start). if start < 0, start + array.length is start point.
 * splice(start, deleteCount).
 * splice(start, deleteCount, item1).
 * splice(start, deleteCount, item1, item2).
 * splice(start, deleteCount, item1, item2, itemN).
 * 
 * Parameters: start, deletecount(optional), item1...itemN(optional).
 * Return: deleted elements, if no element delete then return empty array.
 */
    /**
     * Delete or Remove elements.
     * 1. Remove one element, from specific index.
     * 2. Remove multiple element, from specific index.
     * 3. Remove all element, from specific index.
     */
    const numbers = [10, 20, 30, 40, 50, 60, 70, 80];

    // 1. Remove one element, from specific index.
    const result1 = numbers.splice(3, 1);
    console.log('result1: ', result1); // [ 40 ]
    console.log('numbers: ', numbers); // [ 10, 20, 30, 50, 60, 70, 80 ]

    // 2. Remove multiple element, from specific index.
    const result2 = numbers.splice(4, 2);
    console.log('result2: ', result2); // [ 60, 70 ]
    console.log('numbers: ', numbers); // [ 10, 20, 30, 50, 80 ]

    // 3. Remove all element, from specific index.
    const result3 = numbers.splice(2);
    console.log('result3: ', result3); // [ 30, 50, 80 ]
    console.log('numbers: ', numbers); // [ 10, 20 ]

    /**
     * Insert or Add elements.
     * 1. Add one element, from specific index.
     * 2. Add multiple element, from specific index.
     */
    const weekDay = ['Sun', 'Mon', 'Tue', 'sat'];

    // 1. Add one element, from specific index.
    const addSingle = weekDay.splice(3, 0, 'Wed');
    console.log('addSingle: ', addSingle); // [ ]
    console.log('weekDay: ', weekDay); // [ 'Sun', 'Mon', 'Tue', 'Wed',  'sat' ]

    // 2. Add multiple element, from specific index.
    const addMulti = weekDay.splice(4, 0, 'Thu', 'Fri');
    console.log('addMulti: ', addMulti); // [ ]
    console.log('weekDay: ', weekDay); // [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri' 'sat' ]

    /**
     * Replacing [Remove + Add] existing elements.
     */
    const items = [200, 400, 500, 1000];
    // Replace[remove 1, add 1].
    const item1 = items.splice(2, 1, 600);
    console.log('item1: ', item1); // [ 500 ]
    console.log('items: ', items); // [ 200, 400, 600, 1000 ]
    // Remove and add [remove 1, add 2].
    const item2 = items.splice(3, 1, 800, 900);
    console.log('item2: ', item2); // [ 1000 ]
    console.log('items: ', items); // [ 200, 400, 600, 800, 900 ]

    /**
     * Using splice() on sparse arrays.
     */
    const arr = [1, , 3, 4, , 6];
    const newArr = arr.splice(1, 2);
    console.log('newArr: ', newArr); // [ <1 empty item>, 3 ]
    console.log('arr: ', arr); // [ 1, 4, <1 empty item>, 6 ]
/**
 * Array.prototype.toSpliced() method [Delete, Insert, Replace].
 * The toSpliced() method of Array instances is the copying version of the splice() method.
   It returns a new array with some elements removed and/or replaced at a given index.
 * The toSpliced() method  without mutating the original array.
 * 
 * toSpliced(start). if start < 0, start + array.length is start point.
 * toSpliced(start, deleteCount).
 * toSpliced(start, deleteCount, item1).
 * toSpliced(start, deleteCount, item1, item2).
 * toSpliced(start, deleteCount, item1, item2, itemN).
 * 
 * Parameters: start, deletecount(optional), item1...itemN(optional).
 * Return: A new array that consists of all elements before start, item1, item2, …, itemN,
   and all elements after start + deleteCount.
 */
    /**
     * Delete or Remove elements.
     * 1. Remove one element, from specific index.
     * 2. Remove multiple element, from specific index.
     * 3. Remove all element, from specific index.
     */
    const numbers = [10, 20, 30, 40, 50];

    // 1. Remove one element, from specific index.
    const result1 = numbers.toSpliced(1, 1);
    console.log('result1: ', result1); // [ 10, 30, 40, 50 ]
    console.log('numbers: ', numbers); // [10, 20, 30, 40, 50]

    // 2. Remove multiple element, from specific index.
    const result2 = numbers.toSpliced(1, 2);
    console.log('result2: ', result2); // [ 10, 40, 50 ]
    console.log('numbers: ', numbers); // [10, 20, 30, 40, 50]

    // 3. Remove all element, from specific index.
    const result3 = numbers.toSpliced(2);
    console.log('result3: ', result3); // [ 10, 20 ]
    console.log('numbers: ', numbers); // [10, 20, 30, 40, 50]

    /**
     * Insert or Add elements.
     * 1. Add one element, from specific index.
     * 2. Add multiple element, from specific index.
     */
    const weekDay = ['Sun', 'Mon', 'Tue', 'sat'];

    // 1. Add one element, from specific index.
    const addSingle = weekDay.toSpliced(3, 0, 'Wed');
    console.log('addSingle: ', addSingle); // [ 'Sun', 'Mon', 'Tue', 'Wed', 'sat' ]
    console.log('weekDay: ', weekDay); // ['Sun', 'Mon', 'Tue', 'sat']

    // 2. Add multiple element, from specific index.
    const addMulti = weekDay.toSpliced(3, 0, 'Wed','Thu', 'Fri');
    console.log('addMulti: ', addMulti); // ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'sat' ]
    console.log('weekDay: ', weekDay); // ['Sun', 'Mon', 'Tue', 'sat']

    /**
     * Replacing [Remove + Add] existing elements.
     */
    const items = [200, 400, 500, 1000];
    // Replace[remove 1, add 1].
    const item1 = items.toSpliced(2, 1, 600);
    console.log('item1: ', item1); // [ 200, 400, 600, 1000 ]
    console.log('items: ', items); // [200, 400, 500, 1000]
    // Remove and add [remove 1, add 2].
    const item2 = items.toSpliced(3, 1, 800, 900);
    console.log('item2: ', item2); // [ 200, 400, 500, 800, 900 ]
    console.log('items: ', items); // [200, 400, 500, 1000]

    /**
     * Using toSpliced() on sparse arrays.
     * The toSpliced() method always creates a dense array.
     */
    const arr = [1, , 3, 4, , 6];
    const newArr = arr.toSpliced(1, 2);
    console.log('newArr: ', newArr); // [ 1, 4, undefined, 6 ]
    console.log('arr: ', arr); // [ 1, <1 empty item>, 3, 4, <1 empty item>, 6 ]
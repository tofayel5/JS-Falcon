/**
 * Array.prototype.includes() method.
 * To check if an element is in an array. if exists return true, otherwise false.
 * 
 * includes(searchElement)
 * includes(searchElement, fromIndex) => fromIndex < 0, fromIndex + array.length.
 * 
 * compares searchElement to elements of the array using the SameValueZero algorithm. 
 * -0 is equal to 0, but false is not same as 0. 
 * NaN can be correctly searched for.
 * 
 * Parameters: searchElement, fromIndex(optional, Zero-based index).
 * Return: boolean (true/false) value.
 */
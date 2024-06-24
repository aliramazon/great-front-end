// Implement a function dropRightWhile(array, predicate) that creates a slice of array excluding elements dropped from the end. Elements are dropped until predicate returns falsey. Your function should not modify the original array.

/* 
Arguments
array (Array): The array to query.
predicate (Function): The function invoked per iteration. The function is invoked with three arguments: (value, index, array). Note that the array passed in is the original array.
*/

const dropRightWhile = (array, predicate) => {
    let idx = array.length - 1;
    while (idx >= 0 && predicate(array[idx], idx, array)) {
        idx--;
    }

    return array.slice(0, idx + 1);
};

/*

Implement a function dropWhile(array, predicate) that creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey. Your function should not modify the original array.

Arguments
array (Array): The array to query.
predicate (Function): The function invoked per iteration. The function is invoked with three arguments: (value, index, array).

*/

const dropLeftWhile = (array, predicate) => {
    let idx = 0;
    while (idx < array.length && predicate(array[idx], idx, array)) {
        idx++;
    }

    return array.slice(idx);
};

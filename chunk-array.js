// Implement a function chunk(array, [size=1]) that splits the input array into groups of length size and returns them within a new array. If array can't be split evenly, the final chunk will be the remaining elements. The function should not modify the original input array.

const chunk = (array, size = 1) => {
    const chunks = [];
    let chunk = [];

    for (let i = 0; i < array.length; i++) {
        chunk.push(array[i]);
        if (chunk.length === size || i === array.length - 1) {
            chunks.push(chunk);
            chunk = [];
        }
    }

    return chunks;
};

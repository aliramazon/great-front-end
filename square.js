Array.prototype.square = function () {
    return this.map((ele) => Math.pow(ele, 2));
};

const arr = [1, 2, 3, 4, 5, 6];

console.log(arr.square());

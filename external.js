const numbers = [3.14, 200, 300, 400];

function sum(...arr) {
    return arr.reduce((sum, el) => sum + el, 0);
}

module.exports = {numbers, sum};
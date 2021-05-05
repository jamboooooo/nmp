let a = 25;
let b = 39;

function sum(a, b) {
    return a + b;
}

module.exports = { a: a, b: b, func: sum(a, b) }
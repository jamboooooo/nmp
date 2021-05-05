function div(a, b) {
    return a / b;
}

function add(a, b) {
    return a + b;
}

function square(a) {
    return a * a;
}

function numbersSum(arr) {
    sum = 0;
    arr.forEach(item => {
        sum = sum + item;
    });
    return sum;
}

module.exports = {
    div: div,
    add: add,
    square: square,
    numbersSum: numbersSum
}
let { div, add, square, numbersSum } = require('./functions')


test('Проверка функции div()', function() {
    expect(div(4, 2)).toBe(2);
    expect(div(9, 3)).toBe(3);
    expect(div(10, 2)).toBe(5);
})

test('Проверка функции add()', function() {
    expect(add(4, 2)).toBe(6);
    expect(add(9, 3)).toBe(12);
    expect(add(10, 2)).toBe(12);
})

test('Проверка функции square()', function() {
    expect(square(4)).toBe(16);
    expect(square(9)).toBe(81);
    expect(square(10)).toBe(100);
})

test('Проверка функции numbersSum()', function() {
    expect(numbersSum([1, 2, 3, 4, 5])).toBe(15);
    expect(numbersSum([9, 8, 7, 6, 5])).toBe(35);
    expect(numbersSum([11, 25, 77, 10, 16, 1])).toBe(140);
})
const { stringLength, reverseString, Calculator, capitalize } = require('./functions.js');

//Task one test
test('length of a string', () => {
    const test1 = 'Hello World!';
    const test2 = 'Hello';

    expect(stringLength(test1)).toBe("Error");
    expect(stringLength(test2)).toBe(5);
})


//Task two test
test('string is reversed', () => {
    const test1 = 'hello';
    expect(reverseString(test1)).toBe('olleh');
})


//Task three test
const calc = new Calculator
describe('test calculator', () => {
    test('addition', () => {
        expect(calc.add(1, 1)).toBe(2)
        expect(calc.add(4, 2)).toBe(6)
        expect(calc.add(5, 3)).toBe(8)
    });

    test('subtraction', () => {
        expect(calc.subtract(3, 2)).toBe(1)
        expect(calc.subtract(4, 2)).toBe(2)
        expect(calc.subtract(5, 1)).toBe(4)
    });

    test('division', () => {
        expect(calc.divide(8, 2)).toBe(4)
        expect(calc.divide(6, 2)).toBe(3)
        expect(calc.divide(9, 3)).toBe(3)
    });

    test('multiplication', () => {
        expect(calc.multiply(4, 2)).toBe(8)
        expect(calc.multiply(6, 2)).toBe(12)
        expect(calc.multiply(18, 3)).toBe(54)
    });

    test('string is capitalized', () => {
        const text1 = 'champion';
        const text2 = 'premiership'
        const text3 = 'league'

        expect(capitalize(text1)).toMatch(/Champion/)
        expect(capitalize(text2)).toMatch(/Premiership/)
        expect(capitalize(text3)).toMatch(/League/)

    })


})
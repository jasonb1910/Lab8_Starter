// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('(123) 456-7890 is a valid phone number', () => {;
    expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('123 456-7890 is a valid phone number', () => {;
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});

test('1234 is not a valid phone number', () => {;
    expect(functions.isPhoneNumber('123-456')).toBe(false);
});

test('abcd is not a valid phone number', () => {;
    expect(functions.isPhoneNumber('hellothere')).toBe(false);
});

test('j8bui@ucsd.edu is a valid email', () => {;
    expect(functions.isEmail('j8bui@ucsd.edu')).toBe(true);
});

test('dakaene@gmail.com is a valid email', () => {;
    expect(functions.isEmail('dakaene@gmail.com')).toBe(true);
});

test('studentucsd.edu is not a valid email', () => {;
    expect(functions.isEmail('studentucsd.edu')).toBe(false);
});

test('thisisfake is not a valid email', () => {;
    expect(functions.isEmail('thisisfake')).toBe(false);
});

test('Password110 is a valid strong password', () => {;
    expect(functions.isStrongPassword('Password110')).toBe(true);
});

test('password_110 is a valid strong password', () => {;
    expect(functions.isStrongPassword('password_110')).toBe(true);
});

test('110 is not a valid strong password', () => {;
    expect(functions.isStrongPassword('110')).toBe(false);
});

test('universityofcaliforniasandiego is not a valid strong password', () => {;
    expect(functions.isStrongPassword('universityofcaliforniasandiego')).toBe(false);
});

test('02/02/2020 is a valid date', () => {;
    expect(functions.isDate('02/02/2020')).toBe(true);
});

test('2/2/2222 is a valid date', () => {;
    expect(functions.isDate('2/2/2222')).toBe(true);
});

test('2/2/22 is not a valid date', () => {;
    expect(functions.isDate('2/2/22')).toBe(false);
});

test('NotDate is not a valid date', () => {;
    expect(functions.isDate('NotDate')).toBe(false);
});

test('#008000 is a valid hex color', () => {;
    expect(functions.isHexColor('#008000')).toBe(true);
});

test('#FF0000 is a valid hex color', () => {;
    expect(functions.isHexColor('#FF0000')).toBe(true);
});

test('white is not a valid hex color', () => {;
    expect(functions.isHexColor('white')).toBe(false);
});

test('#A is not a valid hex color', () => {;
    expect(functions.isHexColor('#A')).toBe(false);
});


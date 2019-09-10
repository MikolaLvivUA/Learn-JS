/**створити метод який : приймає три числа та виводить та повертає найбільше.*/

function theBiggestNumber(a, b, c) {

    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
        throw new Error('Something is not a number');
    }

    if (a > b && a > c) {
        console.log(a);
        return a;
    }

    if (b > a && b > c) {
        console.log(b);
        return b;
    }

    if (c > a && c > b) {
        console.log(c);
        return c;
    }

    if (a === b && b === c) {
        console.log(a);
        return a;

    }

}


theBiggestNumber(11,22,33);
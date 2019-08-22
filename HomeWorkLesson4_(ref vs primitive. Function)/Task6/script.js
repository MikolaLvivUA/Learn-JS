/**створити метод який : повертає найменьше число з масиву*/

function arr() {

    let arr = [];

    for (let i = 0; i < arguments.length; i++) {

        arr.push(arguments[i])
    }

    let min = Math.min(...arr);
    console.log(min);
    return min;

}

arr(2, 3, 4, 8, 10);
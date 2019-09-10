/**створити метод який : виводить масив*/

function arr() {

    let arr = [];

    for (let i = 0; i < arguments.length; i++) {

        arr.push(arguments[i])

    }
    console.log(arr);

}

arr(2, 3, 4, 8, 10);
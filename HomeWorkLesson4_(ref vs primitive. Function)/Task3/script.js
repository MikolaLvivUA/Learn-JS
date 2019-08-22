/**створити метод який : приймає будь-яку кількість чисел, повертає найменше, а виводить найбільше*/

function arr() {

    let arr = [];

    for (let i = 0; i < arguments.length; i++) {

        arr.push(arguments[i])
    }
    let max = Math.max(...arr);
    console.log(max);
    return Math.min(...arr);


}

arr(15, 444, 5235, 634, 77);

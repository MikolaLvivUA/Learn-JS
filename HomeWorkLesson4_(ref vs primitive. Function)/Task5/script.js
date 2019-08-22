/**створити метод який : повертає найбільше число з масиву*/


function arr() {

    let arr =[];

    for (let i = 0; i < arguments.length; i++) {

        arr.push(arguments[i])
    }
    let max = Math.max(...arr);
    console.log(max);
    return  max;


}

arr(452345, 1345, 868, 543, 10);

/*

function factorial(num, callback) {

    if (num != 1){

        console.log('callback ' + num);

        return num * callback(num-1, callback)
    } else {
        return 1;
    }

}
let sum = factorial(5, factorial);

console.log(sum);
*/


function fibonacci(max) {
    let result = [0, 1];

    for (let i = 1; result[i] < max; i++) {
        result.push(result[i] + result[i - 1]);
    }

    console.log(result);

}


fibonacci(6);
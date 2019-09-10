/**створити метод який : приймає будь-яку кількість чисел, повертає найменше, а виводить найбільше*/

function arr() {
    let BiggestNumber = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (BiggestNumber < arguments[i] ){
            BiggestNumber = arguments[i];
        }

    }
    console.log(BiggestNumber);

    let SmallestNumber = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (SmallestNumber > arguments[i]){
            SmallestNumber = arguments[i]
        }
    }
    return SmallestNumber;
}


arr(15, 444, 5235, 634, 77, 145677);

let Small = arr(1,2,3,-15,5,6,7);

console.log(Small);
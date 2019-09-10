/**
 1 створити функцію яка виводить масив
 2 стіорити функцію яка заповнює масив рандомними числами та виводить його.
 Для виведення використати попвередню функцію.
 3 --//-- яка знаходить найбільше число в масиві.Для створення масиву використати
 попередню функцію
 4 --//-- яка скаладає значення елементів масиву та повертає його.
 5 --//-- яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
 Приклад
 [1,2,3,4]
 [2,3,4,5]
 результат
 [3,5,7,9]
 6 --// -- яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
 Двожина масиву від 2 до 100
 Приклад
 [1,0,6,0,3] => [1,6,3,0,0]
 [0,1,2,3,4] => [1,2,3,4,0]
 [0,0,1,0]   => [1,0,0,0]
 */



function taskNumberLoger(taskNumber) {

    if (typeof taskNumber !== 'number') {
        throw new Error('taskNumber not correct')
    }

    console.log('______________________' + 'Task' + taskNumber + '________________________________');

}


/**Task1*/
taskNumberLoger(1);

function arrayLoger() {

    console.log(Object.values(arguments));
    return arguments;

}

arrayLoger(22, 11, 33, 444, 55, 6, 7, 88);

/**Task2*/
taskNumberLoger(2);

function randomNumberPusher(amountOfValues) {

    let arr = [];
    while (arr.length < amountOfValues) {
        let randomValues = parseInt(Math.random() * 999)
        arr.push(randomValues);
    }
    return arr;
}

arrayLoger(randomNumberPusher(8));
/**Task3*/
taskNumberLoger(3);

function biggestArrNum() {

    let arr = randomNumberPusher(10);
    let biggestNum = Math.max(...arr);
    console.log(biggestNum);
    return biggestNum
}

biggestArrNum();
/**Task4*/
taskNumberLoger(4);

function arrayValueSummer() {

    let arr = randomNumberPusher(10);
    if (!Array.isArray(arr)) throw new Error('NOT ARRAY');
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {

        sum += arr[i];

    }
    return sum;
}

let sum = arrayValueSummer();

console.log(sum);
/**Task5*/
taskNumberLoger(5);

function taskFive() {

    let arr = randomNumberPusher(10);
    let arr2 = randomNumberPusher(10);
    let arr3 = [];
    sumSamillindexValue = 0;

    for (let i = 0, j = 0; i < arr.length && j < arr2.length; i++, j++) {

        if (i === j){
            sum = arr[i] + arr2[j];
            arr3.push(sum);
        }

    }

    return arr3;

}

let newSumArr = taskFive();
console.log(newSumArr);
/**Task6*/
taskNumberLoger(6);

let arrToChange = [1, 0, 6, 0, 3];
let normalizedArr = [];

for (let i = 0; i < arrToChange.length; i++) {

    if (arrToChange[i] === 0){
        normalizedArr.push(arrToChange[i])
    }

}

for (let i = arrToChange.length - 1; i >= 0; i--) {
    if (arrToChange[i] !== 0){
        normalizedArr.unshift(arrToChange[i]);
    }

}


console.log(arrToChange);
console.log(normalizedArr);
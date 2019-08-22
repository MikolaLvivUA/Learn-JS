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






/**Task1*/


function arrayLog() {

    let arrValue = Object.values(arguments);

    console.log(arrValue);
}


/**Task2*/

function randomNumberArray(amountElements) {

        let arr = []
        while (arr.length < amountElements){

            let rundomNumber = parseInt(Math.random(1)*999);
            arr.push(rundomNumber)
        }

    arrayLog(arr)
    return arr;
}

randomNumberArray(10);


/**Task3*/

function biggestArrnumber() {

    let arr3 = randomNumberArray(10)

    let maxNumber = Math.max(...arr3);

    console.log(maxNumber);


}

biggestArrnumber()
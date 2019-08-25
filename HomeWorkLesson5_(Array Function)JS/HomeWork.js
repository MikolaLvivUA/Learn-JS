/**
 1.- Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
 2.- Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
 3.- Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
 4.- Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
 5.- Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
 6.- Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент при помощи shift
 7.- Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент при помощи pop
 8.- slice. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
 9.- slice. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы
 */

function taskNumberLoger(taskNumber) {

    if (typeof taskNumber !== 'number') {
        throw new Error('taskNumber not correct')
    }

    console.log('______________________' + 'Task' + taskNumber + '________________________________');

}

let arrABC = ['a', 'b', 'c'];
let arr123 = [1, 2, 3];

/**Task 1*/
taskNumberLoger(1);

let Task1 = arrABC.concat(arr123);
console.log(Task1);

/**Task2*/
taskNumberLoger(2);

let Task2 = arrABC.concat(1, 2, 3);
console.log(Task2);

/**Task3*/
taskNumberLoger(3);

let  Task3Arr = [1, 2, 3];
console.log(Task3Arr.reverse());

/**Task4*/
taskNumberLoger(4);

let arr4 = [1, 2, 3];
arr4.splice(3, 0, 4, 5, 6)
console.log(arr4);
/**Task5*/

taskNumberLoger(5);

let arr5 = [1, 2, 3];

arr5.splice(0, 0, 4, 5, 6);

console.log(arr5);

/**Task6*/
taskNumberLoger(6);

let arr6 = ['js', 'css', 'jq'];
let firstEl = arr6.shift();
console.log(firstEl);

/**Task7*/
taskNumberLoger(7);

let arr7 = ['js', 'css', 'jq'];
let lastEl = arr7.pop();
console.log(lastEl);

/**Task8*/
taskNumberLoger(8);

let arr8 = [1, 2, 3, 4, 5];
let Task8 = arr8.slice(0, 3, 3);
console.log(Task8);
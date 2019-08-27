
/**
 - Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
 - Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
 - Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
 - Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
 - Дан массив [3, 4, 1, 2, 7]. Отсортируйте его
 - Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
 є масив -
 let users = [
 {name: 'vasya', age: 31, status: false},
 {name: 'petya', age: 30, status: true},
 {name: 'kolya', age: 29, status: true},
 {name: 'olya', age: 28, status: false},
 {name: 'max', age: 30, status: true},
 {name: 'anya', age: 31, status: false},
 {name: 'oleg', age: 28, status: false},
 {name: 'andrey', age: 29, status: true},
 {name: 'masha', age: 30, status: true},
 {name: 'olya', age: 31, status: false},
 {name: 'max', age: 31, status: true}
 ];
 - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний
 індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти
 це в новий масив (первинний масив залишиться без змін)
 -відсортувати його за індентифікатором
 */

/**Task1*/
/**Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].*/

console.log('**********************************************************');

let arr1 = [1, 2, 3, 4 , 5];

arr1.splice(1, 2);

console.log(arr1);

console.log('**********************************************************');

/**Task2*/
let arr2 = [1, 2, 3, 4, 5];
let arr2New = arr2.splice(1, 3);
console.log(arr2New);

console.log('**********************************************************');

/**Task3*/
let arr3 = [1, 2, 3, 4, 5];

arr3.splice(3, 0, 'a', 'b', 'c');

console.log(arr3);

console.log('**********************************************************');

/**Task4*/
/**Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].*/

let arr4 = [1, 2, 3, 4, 5];

arr4.splice(1, 0 , 'a', 'b');
arr4.splice(6, 0, 'c');
arr4.splice(8, 0, 'e');
console.log(arr4);

console.log('**********************************************************');

/**Task5*/

/**Дан массив [3, 4, 1, 2, 7]. Отсортируйте его*/

let arr5 = [3, 4, 1, 2, 7];

arr5.sort(function (el1, el2) {

    return el1 - el2

});

console.log(arr5);

console.log('**********************************************************');

/**Task6*/
/**Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.*/

let obj6 = {js:'test', jq: 'hello', css: 'world'};

let objKeys = Object.keys(obj6);

console.log(objKeys);
console.log('**********************************************************');
/**Task7*/
/**
 є масив -
 let users = [
 {name: 'vasya', age: 31, status: false},
 {name: 'petya', age: 30, status: true},
 {name: 'kolya', age: 29, status: true},
 {name: 'olya', age: 28, status: false},
 {name: 'max', age: 30, status: true},
 {name: 'anya', age: 31, status: false},
 {name: 'oleg', age: 28, status: false},
 {name: 'andrey', age: 29, status: true},
 {name: 'masha', age: 30, status: true},
 {name: 'olya', age: 31, status: false},
 {name: 'max', age: 31, status: true}
 ];
 - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний
 індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти
 це в новий масив (первинний масив залишиться без змін)
 -відсортувати його за індентифікатором*/

let arr7 = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];



let arr7New = JSON.parse(JSON.stringify(arr7));

for (let i = 0; i < arr7New.length; i++) {


    let randomNum = +parseInt(Math.random()*(9999-1000)+1000)//Форула для виведення рандомних чотирьох значних чисел

    arr7New[i].id = (randomNum);

}

console.log(arr7);
console.log('______________________________________________________________');
console.log(arr7New);
console.log('______________________________________________________________');


let sortedArr7New = arr7New.sort(function (id1, id2) {

    return id1.id - id2.id

});

console.log(sortedArr7New);
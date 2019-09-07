/**Функції масивів*/



let arr = [3, 5, 2, 5, 6, 36, 6, 23, 5, 4,654,4,564,4,4561,1,89,456,15,45,4,6,156,156,146,4613];
let objArr = [
    {name: 'Viktor', age: 23, car: false},
    {name: 'Dima', age: 20, car: false},
    {name: 'Igor', age: 18, car: true},
    {name: 'Nadiya', age: 45, car: false},
    {name: 'Ira', age: 15, car: true}
];

/** Функція forEach це ітератор виключно для масивів який ітерує Значення Індекс Або Цілий масив, використовується коли
 * треба перебрати якісь значення масиву*/
/*
arr.forEach(function (value, index, array) {

    console.log(value);
    console.log(index);
    // console.log(array);
    console.log('__________________');

});
*/




/**Функція filter відфільтровує масив по заданим даним*/
/*
let filteredArr /!*засовуєм відфільтровані дані в новий масив а попередній масив залишається нзмінним*!/ = arr.filter(function (value, index) {

  /!* if (value > 10){
       return true //відфільтровані дані треба заретьорнити
   }*!/

  return (index % 2 === 0) //Коротший запис умови // верне всі значення з парними індексами

});

console.log(filteredArr);
*/


/**Функція map може вибрати окремий елемент з масиву провести над ним якісь операції і це заретьорнити*/
/** Для прикладу множимо всі елементи масиву на 5 і додаєм їх в новий масив*/
/*
let mapedArr = arr.map(function (value) {

    return value *5;

});

console.log(mapedArr);
*/

/**Приклад з масивом обєктів*/

/*


let mappedObjArr = objArr.map(function (user) {

    return {
        name: user.name,
        age: user.car
    } //вертає одночасно імена і машини в оюєкті
    // return user.age // ретьорним конкретне значення обєкта

});

console.log(mappedObjArr);
*/

/**Функція сoncat приймає в масив значення не треба в аргументі присвоювати функцію, елементи пишуться прямо в ньому
 (push на  на відміну від пуш він додає обєкт або масив не окремим масивом)*/
/*
let narr =  arr.concat('Hello', 'Kyiv', 'Okten');
console.log(narr);
*/

/**Функція every пробыгається ітератором по нашому масиву і повертає нам true або false перевіряє кожен елемент якщо хочаб якийсь елемент не виконує умови функція вертає false*/
/*
let isTrue = arr.every(function (number) {

    return typeof number === 'number'

});

console.log(isTrue);
*/

/** Функція some пробыгається ітератором по масиву і якщо б хоча б один елемент буде виконувати задані умови він верне true*/

/*
let isSome = arr.some(function (number) {

    return typeof number === 'number'
    
});

console.log(isSome);
*/
 /**Приклад з обєктом в масиві*/
/*

 let isSome = objArr.some(function (number) {

     return number.car

 });

console.log(isSome);
*/

/**Функція find Пробігається ітератором по масиву знаходить перший елеиент яукий попадає під задані умови і повертає його*/
/*let a = arr.find(function (value) {

    return value > 20

});

console.log(a);*/
/** Приклад з обэктом*/

/*let carOwner = objArr.find(function (user) {

    return user.car

});

console.log(carOwner);*/

/** /**Функція findIndex Пробігається ітератором по масиву знаходить перший елеиент яукий попадає під задані умови і повертає його індекс*/

/*
let a = arr.findIndex(function (value) {

    return value > 20

});

console.log(a);
/!** Приклад з обэктом*!/

let carOwner = objArr.findIndex(function (user) {

    return user.car

});

console.log(carOwner);
*/

/**Функція flat розкриває масив в масиві вказати треба рівні вкладеності*/
/*
let flatArr = [73735, ['Str', false, [738], [90]], 22, 'Dima'];

let res = flatArr.flat(1);
console.log(res);
*/

/** Функція sort сортує масив, порібно вказати два елементи для сортування*/
/*
let sortedArr = arr.sort(function (el1 , el2) {

    return el1 - el2 //Якщо число відємне то числа місцями не міняються, якщо додатнє то місцями міяється

});
console.log(sortedArr);
*/

/**Приклад зі стрінгами стрінги сортує по алфавіту*/
/*
 let sortedArr = objArr.sort(function (el1, el2) {

     // return el1.age - el2.age //Шоб посортувати обєкти потрібно умову задавати як для обєктів а тобто до конкретного значення обєкту
     // Таким методом ми сортуєм стрінги
    if (el1.name > el2.name) {
        return 1
    }

    if (el1.name < el2.name){
        return -1
    }
    return 0
 });

console.log(sortedArr);
*/

/**Функція reduce використовується для того щоб прогнати по циклу кожен елемент і з ним щось зробити наприклад просумувати всі reduceRight робить те саме тыльки в зворотньому порядку*/
/*let redVal = arr.reduce(function (prevVal, currVal) {

    console.log(prevVal);
    console.log(currVal);
    console.log('____________________');
    return prevVal + currVal //все що э в ретьорні попадаэ в prevValue
});

console.log(redVal);*/

/**Приклад з обєктом в масиві*/
/*
let redVal = objArr.reduce(function (prevVal, currVal) {

    console.log(prevVal);
    console.log(currVal.age);
    console.log('____________________');
    return prevVal + currVal.age //все що э в ретьорні попадаэ в prevValue
}, 0); //Для коректного відображення потрібно оголосити третю змінну (initial value) це те з чого починаэться відлік на першій ітерації
console.log(redVal);
*/

/** Функцією slice можна зі стрічки  або масиву вирізати будь що і вивести*/
/*
let str = 'HELLO WORLD AND STUDENTS';
let s = str.slice(6, 9);

console.log(s);
console.log(str);ґ
*/

/**Функція splice приймає з якого елементу хочу вирізатиБ скільки елементів вирізати і що замість нього вставити*/
/*
let arr2 = [3, 5, 2, 5, 1]
let spliced = arr2.splice(0, 0, 9999, 777, ); // Якщо вказати що вирізаєм 0 елементів і вставляєм якісь то таким методом ми вставляєм елементи в масив

console.log(spliced);
console.log(arr2);*/


/*
let arr5 = arr.map(function (value) {

    if (value===5){
        value = 0
    }

    return value
});

console.log(arr5);
*/

//Типовы типи даних JS
/*let str = 'STRING';
let num = 23;
let bool = true;*/

//ARRAY(МАСИВ)
//Типовий масив
/*let arr = [7, 17, 12, 999, 86];*/
//console.log(arr);

//Виведення окремого елемента з масиву (рахунок ведеться з 0 1 2 3...)
/*let hello = arr[1];
console.log(hello);*/








//Object

/*let obj = {
    //перший рівень вложеності
    //дані записуються за допомогою (ключ: значення key: value)
    name: 'Viktor',
    age: 23,
    profession: { //другий рівень вложеності
        company: 'ELEKS',
        title: 'Middle JS',
        projects: arr //Масив вложений в обєкт
    }
};*/
/*
//Виведення елементів обєкта
console.log(obj.profession.projects[1]); //виведення елемента масиву вкладеного в обэкт);

obj.car = 'Volvo'; //Додавання елементів в обєкт

obj.profession.salary = 100; //Додавання елемента в другий рывень вкладеності обєкта

arr.push('Dima'); //Додавання елемента в кінець масиву

console.log(obj);

console.log(arr);

console.log(arr.length);// пропертя length показує кількість елементів в масиві рахує з 1 2 3 4 5...

console.log(arr[6]);// Але якщо ми захочемо вивести елемент номер 6 то отримаємо undefined тому що при виведені
                    //рахує з 0 1 2 3...

console.log(obj.profession.salary);//виведення доданого у другий рывень вкладеносты елемента

delete obj.profession.salary;

console.log(obj);*/

// let obj = {
//     //перший рівень вложеності
//     //дані записуються за допомогою (ключ: значення key: value)
//     name: 'Viktor',
//     age: 23,
//     profession: { //другий рівень вложеності
//         company: 'ELEKS',
//         title: 'Middle JS',
//         projects: ['SPIN'] //Масив вложений в обєкт
//                 }
//         };
//
// let keyFromServer = 'age';
//
// console.log(obj[keyFromServer]); //Виведення елемента через змінну аналогічно двом нижнім записам
// console.log(obj['age']);
// console.log(obj.age);
//
//
// console.log(obj['profession']); //вивелення елементів обєкта в стилі масиву стрічкою
//
// console.log(arr);
//
// arr.pop();//видаленняф останнььго елементу з масиву кількість попів = кількості видалених елементів з кінця
//
// let deleteValue = arr.pop();
//
// console.log(deleteValue); //Повернення видаленого елемента
//
// arr.shift(); //видалення першоогоо елементу з масиву
//
// arr.unshift('Privet'); //Додавання елементу до масиву на перед
// console.log(arr);

/*console.log(arr.length);*/

//Масив з вкладеними об'эктами
/*let users = [
    {name: 'Roman', age: 15},
    {name: 'Bogdan', age: 7},
    {name: 'Dima', age: 20},
    {name: 'Vitaliy', age: 3},
    {name: 'Karisha', age: 20}
];*/



//Пробіжка циклом FOR по масиву
/*
for (let i = 0 /!*Починати з 0 тобто з першого елемента масиву*!/; i < arr.length/!*виконувати допоки і буде меншим за довжину масиву*!/; i++) {
    /!*console.log(i);*!/ //виведення номерів елементів масиву

    /!*console.log(arr[i]);*!/ //виведення всіх елементів масиву

    if (arr[i]<15){
        console.log('BINGO');
        console.log(arr[i]);
        console.log('_________');
    }
}*/


//ПРОБІЖКА ПО МАСИВУ USERS З Вкладеними обєктами
/*
let i = 0;//Оголошуєм початок циклу
let sum = 0;
while (i < users.length){
    /!*console.log(users[i].age);*!/ //Вивести всі роки юзерів
    sum = sum + users[i].age; //Вивести суму всіх років юзерів
    i++
}
console.log(sum);*/







//ФУНКЦІЇ (Basik)

//Функції мають властивість всплиття і можуть виконуатись перед тим як були оголошені в коді
//Function expression
function loger() {
    console.log('I am a function');
    console.log('And I have super power');
    console.log('Piu piu');
}
// Виклик функції
loger();
loger();
loger();
loger();


//Function declaration
//Таке оголошення функцыъ ламає всплиття
let xxx = function () {
    console.log(22);
    console.log(33);
};

//Функція яка приймає якесь значення
function numberLoger(aaa) {
    console.log(aaa);
}

numberLoger(675);
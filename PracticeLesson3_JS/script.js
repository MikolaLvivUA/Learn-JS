//Task 1-2 === task10 from HW


//Task3 используя Math.random заполнить массив из ???(сколько хотите) элементов.
//  диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
console.log('____________________________________________');
let arr = [];
let arr2 = [];

while (arr.length < 15) {
    let randomNumber = parseInt(Math.random(8) * 732);
    arr.push(randomNumber);

}
console.log(arr);


//Task4 вывести на консоль  каждый третий елемент
console.log('_______________________________');
for (let i = 0; i < arr.length; i += 3) {


    console.log(arr[i])
}


//Task5 вывести на консоль  каждый третий елемент
//  но при условии что его значение является парным.
console.log('___________________________________');

for (let i = 0; i < arr.length; i += 3) {


    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }


}

//Task6 вывести на консоль  каждый третий елемент
//  но при условии что он имеет парное значение и
//  записать их в другой массив.
console.log('______________________________');

for (let i = 0; i < arr.length; i += 3 /*Ruhatus z krokom 3*/) {


    if (arr[i] % 2 === 0) {
        console.log(arr[i]);

        arr2.push(arr[i]);
    }

}
console.log(arr2);


//Task7 Вывести каждый елемент массива у которого соседний с права элемент - парный
console.log('________________________________');
console.log(arr);

for (let i = 0; i < arr.length; i++) {

    if (arr[i + 1] /*dodayem +1 ale do indeksu a ne do elementu*/ % 2 === 0) {

        console.log(arr[i])

    }

}

 //Task8  масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній
// чек.

console.log('____________________________');

let prices = [100,250,50,168,120,345,188];

let sum = 0
console.log(prices);
for (let i = 0; i < prices.length; i++) {

    sum = sum + prices[i]


}
console.log(sum);

console.log(sum/ prices.length);



//Task9

console.log('__________________________');

let randomArr = []

while (randomArr<15){
    let randomNumber = parseInt(Math.random()*35)
}

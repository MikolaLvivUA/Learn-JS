
//РОЗВОРОТ ТРЬОХЗНАЧНОГО ЧИСЛА ЗА ДОПОМОГОЮ ОСТАЧІ ВІД ДІЛЕННЯ ТА МАТЕМАТИЧНИХ ОПЕРАЦІЙ
/*const NORMAL_NUMBER = 234;
//При діленні числа на 100 ми отримуємо першу цифру з числа, а за допомогою parseInt ми выдрізаємо цифри після коми
const FIRST_NUMBER = parseInt(NORMAL_NUMBER/100);
//Визначаєм остачу від діллення числа на 100 - (це дві наступні цифри в числі), після чого ділимо їх на 10 щоб отримати
//середнэ число, ы за допомогою parseInt відрізаєм цифри після коми та отримуєм середнє число.
const SECOND_NUMBER = parseInt((NORMAL_NUMBER%100)/10);
//Визначаєм остачу від діллення числа на 10 - (це остання цифра числа), після чого за допомогою parseInt відрізаєм цифри
// після коми якщо такі є.
const THIRD_NUMBER = parseInt(NORMAL_NUMBER%10);
//Виводим цифри в зворотньому порядку за допомогую математичноъ дыъ + між цифрами додаєм пусті стрінги щоб JS логічно не
//вивів суму цифр.
console.log(THIRD_NUMBER + '' + SECOND_NUMBER + '' + FIRST_NUMBER);*/

//РОЗВОРОТ ЧИСЛА ЗА ДОПОМОГОЮ ЦИКЛУ (ЯК НОРМАЛЬНІ ЛЮДИ=))

/*const NORMAL_NUMBER= +prompt('Write 3 number');
//Створюэм ще одну змінну в яку копіюєм початкове число
let normalCopy=NORMAL_NUMBER;
//Змінній reversed задаэм початкове значення 0;
let reversed = 0;

while (normalCopy > 0){
    let ostacha = normalCopy % 10;
    reversed = (reversed * 10) + ostacha;
    normalCopy = parseInt(normalCopy/10);
}
console.log(reversed);*/



//СВІТЛОФОРИ з Питанням чи дорога чиста
/*
const trafficLights = prompt('Please enter color');



if (trafficLights.toLowerCase() === 'green' || trafficLights.toLowerCase() === 'зелений'){
    const isRoadClear = confirm('Is road clear?');
    isRoadClear ? alert('GO') : alert('Wait while all cars will leave');
}else if (trafficLights.toLowerCase() === 'yellow'){
    const isRoadClear = confirm('Is road clear?');
    isRoadClear ? alert('Still wait') : alert('Wait');
}else if (trafficLights.toLowerCase() === 'red'){
    const isRoadClear = confirm('Is road clear?');
    isRoadClear ? alert('STOP') : alert('STOP');
}else {
    alert('Just do what you want!')
}
*/



//поставити три числа в порядку зростання

/*const a = +prompt('Enter numberA');
const b = +prompt('Enter numberB');
const c = +prompt('Enter numberC');

if (a<b && a<c && b<c){ //abc
    console.log(a, b, c);
}

if (a<c && a<b && c<b){ //acb
    console.log(a, c, b);
}

if (c<a && c<b && a<b){ //cab
    console.log(c, a, b);
}

if (c<b && c<a && b<a){ //cba
    console.log(c, b, a)
}

if (b<c && b<a && c<a){ //bca
    console.log(b, c, a);
}

if (b<a && b<c && a<c){ //bac
    console.log(b, a, c)
}*/

//ВІДСОРТУВАТИ ЧИСЛА В ПОРЯДКУ ЗРОСТАННЯ ВВІШИ ТРЬОХ ЗНАЧНЕ ЧИСЛО
const number = +prompt('Enter three nimbers');

const a = parseInt(number/100);
const b = parseInt((number%100)/10);
const c = parseInt(number%10);

if (a<b && a<c && b<c){ //abc
    console.log(a, b, c);
}

if (a<c && a<b && c<b){ //acb
    console.log(a, c, b);
}

if (c<a && c<b && a<b){ //cab
    console.log(c, a, b);
}

if (c<b && c<a && b<a){ //cba
    console.log(c, b, a)
}

if (b<c && b<a && c<a){ //bca
    console.log(b, c, a);
}

if (b<a && b<c && a<c){ //bac
    console.log(b, a, c)
}

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

const NORMAL_NUMBER=123;
//Створюэм ще одну змінну в яку копіюєм початкове число
let normalCopy=NORMAL_NUMBER;
//Змінній reversed задаэм початкове значення 0;
let reversed = 0;

while (normalCopy > 0){
    let ostacha = normalCopy % 10;
    reversed = (reversed * 10) + ostacha;
    normalCopy = parseInt(normalCopy/10);
}
console.log(reversed);





/**
 Recursion
 Callback
 Event Loop
 */

/**RECURSION*/
/**Рекурсія це функція яка викликає сама себе*/

/**Приклад найпростышоъ рекурсії, яка виконується безконеччно*/
/*
function recursion/!*Назва функції*!/() {
    console.log('RECURSION!');
    recursion();//Викликаєм функцію в самій собі
}

recursion();//Функція безкінечно буде виводити слово 'RECURSION';
*/

/**Пробіжка по масиву за допомогою рекурсії(Цикл на реурсіях)*/
/*
let arr = [2,4,6,8,1];
let i = 0;//початкова точка выдліку

function recursion() {
    //Умова входження в рекурсію
    if (i < arr.length){

        console.log(arr[i]);
        i++;
        recursion();
    }
}

recursion();
*/

/*
let arr = [2,4,6,8,1];

//Можна передавати функцыъ аргументи певні
function recursion(i) {
    //Умова входження в рекурсію
    if (i < arr.length){

        console.log(arr[i]);
        ++i;
        recursion(i);
    }
}

recursion(0);
*/

/**HomeWork*/
/*

let arr = [2,4,6,[5678, 99],1];

let i=0;
let j = 0;

function recursion() {

    if (i < arr.length){

        if (Array.isArray(arr[i])){

            if (j < arr[i].length){
                console.log(arr[i][j]);
                j++;
                recursion()
            }
        }
        i++;
        console.log(arr[i]);
        recursion()
    }
}

recursion();
*/


/**CALLBACK*/
/**CallBack це функція яка приймає параметром іншу функцію*/
/** CALLBACK - ЦЕ ФУНКЦІЯ ЗВОРОТНЬОГО ВИКЛИКУ!!!!*/
/**Типовий приклад колбеку*/
/*
//Функція приймає два числа number 1 і number 2 і CallBack
function someFunc(number1, number2, callback) {
//їх сумує між собою
    let result = number1 + number2;
    //І викликає колбек який параметром цей result передаэ
    callback(result)

}

someFunc(10,5, r =>{
    console.log(r);
});*/

/**Приклад колбеку функції винесеної за дужки*/
/*
function someFunc(number1, number2, callback) {
//їх сумує між собою
    let result = number1 + number2;
    //І викликає колбек який параметром цей result передаэ
    callback(result)

}

function resultLoger(res){
    console.log(res);
}

someFunc(10, 5, resultLoger/!*Таким викликом ми викликаєм тіло функції і вставляєм його замість результ логер (приклад знизу)*!/);
/!*someFunc(10, 5, function resultLoger(res){
    console.log(res);
});*!/

console.log(resultLoger.toString()); //Так можна вивести тіло функції
*/

/**Прибирання кімнати на колбеках*/
/*

function clearRoom(isClear, cb) {

    if (isClear) {
        cb(100);
        return
    }

    throw new Error('You have to clean room first')
}

clearRoom(true, reward => {
    console.log(reward);
});
*/

/**Функція отримання винагороди винесена на зовні*/
/*

function clearRoom(isClear, cb) {

    if (isClear) {
        cb(100);
        return
    }

    throw new Error('You have to clean room first')
}

function getRaward(reward){
    console.log(reward);
}

clearRoom(true, getRaward);
*/

/**Error first, Data last*/
/**Коли ми описуэмо колбек він має приймати два параметра Error і Data*/

/*
function clearRoom(isClear, cb) {

    if (isClear) {
        cb(null, new Date().toISOString(), 100 );//При описі колбека ми обовязково спочатку приймаєм помилку а потім дані
        return
    }else {
        cb('Room not clear', new Date().toISOString(), null);
    }
}

clearRoom(true, (err, time, reward) => {
    //Якщо рума не прибрана err = true
    if (err){
        throw new Error(`${err} at:${time}`)
    }
    //Якщо папрасетр ревард э тру
    if (!err){
        console.log(`Your reward is ${reward}  \n ${time}`  );
    }
});
*/



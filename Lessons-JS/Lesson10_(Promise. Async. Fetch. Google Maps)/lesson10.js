/**Promise*/


//Це э сама банальна обробка асинхронності через колбеки, зараз рідко використовують тому що приводить до callbackHell
/*
function f(a, b, cb) {
    let res = a+b;
    setTimeout(()=>{
        cb(res)
    },1000)
}

f(5,10, function (result) {

    console.log(result);

});
*/


/*Promise це обєкт який має три стани resolve, fullField, pending*/

/*Найпростыший promise*/
/*
let promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve('Hello from promise')
    }, 1000)
});
//коли наш проміс виконується успішно(resolve) він попадає в then
promise
    .then(value => {
        console.log(value);
    });
*/


/*приклад з функцією*/

//створюєм функцію f яка приймає два числа a, b,
/*
function f(a, b) {
    return new Promise((resolve, reject) => { //Вона повертає проміс який має resolve і reject
        let result = a + b; //Робимо змінну результат

        result < 15 ? reject('Error')/!*Якщо він менший ніж 15 ми кидаємо Error*!/ : resolve(result); /!*В інакшому випадку передай цей резудьтат за резолви його*!/

        // if (result < 15) { // Якщо він менший ніж 15 ми кидаємо Error
        //     reject('Error')
        // } else {
        //     resolve(result);// В інакшому випадку передай цей резудьтат за резолви його
        // }
    })
}

f(10, 10)
    .then(value => {
        console.log(value);

        return value + 100//Якщо ми тут щось ретьорним воно зразу попадає в новий then який йде зразу за ним.
    })

    .then(value => {
        console.log(value);

        return value + 5
    })

    .then(value => {
        console.log(value);
    })

    .catch(reason => { //таким чином ми ловимо помилку, якщо цього не задати то помилка не захендлиться і покладе нашу апку
        console.error(reason);
    });
*/


/**AsyncAwait*/
/**Це написання асинхронного коду в синхронному стилі*/

function asynchronus() {
    //тількипрмісифікованим речам можна передавати asyncawait
    return new Promise((resolve) => {

        setTimeout(()=>{
            resolve(2)
        },1000)
    })
}

//перед функцією ми ставимо ключчове слово async цим ми даєм знати джава скріпту що функція є асинхронною,
async function asaw() {

    console.log(1);//консолим одиничку
    let x = await asynchronus();//створюєм змінну х яка є результатом виконання функції асинхронності
    console.log(x);
    console.log(3);
}

asaw();
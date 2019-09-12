/**Так. Письмова таска.
 Зробити свій розпоряжок дня.
 Мають бути функції, які є асинхронними (мають сетТаймАут або сетІнтервал) які описують
 якусь певну вашу дію в день. Наприклад функція прокинутись триває 1с, поїсти - 0,5с. Доїхати до роботи - 2с. Пообідати
 - 1с.Зробити таких функцій в районі 10 штук.
 Функція має приймати параметр, який буде відповідати за успішне чи не
 успішне виконання.Далі виконати їх в тій послідовності, в якій ви виконуєте їх у свій звичайний день.
 Тобто, як приклад
 Прокинулись - Поснідали - Зібрались - ПОїхали на роботу - Працююєте - Пообідали - Працюєте - Випили кави - Працюєте -
 Поїхали до дому - Повчились - Лягли спати.
 Кожна функція має мати якесь успіше або не успішне виконання.
 Тобто можливий варіант, що при виконанні функції доїхати на роботу ви стали в заторі і не попали на роботу. Або йдучи на обід ви
 забули гаманець і лишились голодні.*/


//Таска на промісах
/*
function WakeUP(result) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            result.toUpperCase() === 'YES' ? resolve('WakeUp') : reject('Oh shit I overslept')
        }, 500)

    })
}

WakeUP('YES')
    .then(value => {
        console.log(value);

        return Breakfast('YES')
    })

    .then(value => {

        console.log(value);

        return goToWork('NO')

    })

    .then(value => {
        console.log(value);

        return working('YES')
    })

    .then(value => {

        console.log(value);

        return lunch('YES')

    })

    .then(value => {
        console.log(value);

        return working('YES')
    })

    .then(value => {
        console.log(value);

        return coffeBreak('YES')
    })

    .then(value => {
        console.log(value);

        return working('NO')
    })

    .then(value => {
        console.log(value);
    })

    .catch(reason => {
        console.log(reason);
    });


function Breakfast(result) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            result.toUpperCase() === 'YES' ? resolve('Breakfast') : reject('OH again i have to go work hungry')
        }, 2000)
    })
}

function goToWork(traficJam) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            traficJam.toUpperCase() === 'NO' ? resolve('go to work') : reject('Oh im late again')
        }, 1500)
    })

}

function working(result) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            result.toUpperCase() === 'YES' ? resolve('Working') : reject('Im lazy animal!')
        }, 2500)

    })
}


function lunch(result) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            result.toUpperCase() === 'YES' ? resolve('Lunch') : reject('Oh Im so hungry')

        }, 500)

    })

}

function coffeBreak(result) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            result.toUpperCase() === 'YES' ? resolve('CoffeBreak'): reject('I want to sleep!!!!!!')

        }, 200)

    })

}*/


/**Таска на async await*/

function WakeUP(result) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            result.toUpperCase() === 'YES' ? resolve('WakeUp') : reject('Oh shit I overslept')
        }, 500)

    })
}

function Breakfast(result) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            result.toUpperCase() === 'YES' ? resolve('Breakfast') : reject('OH again i have to go work hungry')
        }, 2000)
    })
}

function goToWork(traficJam) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            traficJam.toUpperCase() === 'NO' ? resolve('go to work') : reject('Oh im late again')
        }, 1500)
    })

}

function working(result) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            result.toUpperCase() === 'YES' ? resolve('Working') : reject('Im lazy animal!')
        }, 2500)

    })
}


function lunch(result) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            result.toUpperCase() === 'YES' ? resolve('Lunch') : reject('Oh Im so hungry')

        }, 500)

    })

}

function coffeBreak(result) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            result.toUpperCase() === 'YES' ? resolve('CoffeBreak') : reject('I want to sleep!!!!!!')

        }, 200)

    })
}





async function schedule() {

    console.log(WakeUP('YES'));

}

schedule();
/**
 Closers
 Arrow function + anonymous
 JSON
 */
/***ЗАМИКАННЯ*/


/**В JS немає приватності навіть якщо ми кажем що змінна приватна вона завжди буде видна всюди*/
/** Якщо замкнути змінну х в області виконання її викликати тільки в області видимості*/
/*
{
    let x = 10;
}
console.log(x);//Такий виклик змінної видасть Error
*/

/**Як працюэ ЗАМИКАННЯ на приклады найпростышої таски Каунтер на замиканнях*/
/*
//створюєм функцію counter який створює свою оюласть видимості і замикаємо в ньому х. х ззовні не видимий
function counter(/!*ФУНКУЦІЯ НІЧОГО НЕ ПРИЙМАЄ*!/) {
    let x = 0; //Створюєм змінну х яка = 0 це початкова точка відліку нашого каунтера, до цього х ніяк доступитися не можливо ззовні функції

    return function () { //Все що в ретьорні буде повернено на зовні. Оскільки змінна х є на вищому рівні
                        // тому ця функція оскільки вона на одному рівні вкладеності зі змінною х вона може з ним працювати
                        // Цю функцію оголошуєм анонімною без назви
        x++;
        console.log(x);
    }
}

let c = counter(); // Через змінну с заствляє виконуватись функцію каунтер
                  // викликаєм ретьорнуті значення функції каунтер, а саме другу функцію яка працює з х.

c();//Оскільки ретьорниться функція то с має тип function відповідно ми викликаєм його як функцію з дужками збоку().//Оскільки змінна одна то і значення ++ для неї рахується з кожним новим викликом
c();
c();

console.log('************************************************************************');
let z = counter();
z(); // Для новоъ змынноъ функцыя працюэ знов з початку
z();
z();
*/

/** Таsk counter на замиканнях*/
/*
function taskCounter() {

    let taskNum = 1;
    return () => console.log('*********************'+'Task ' + (taskNum++) + '*************************');
}

let taskNumCount = taskCounter();

taskNumCount();
taskNumCount();
taskNumCount();
taskNumCount();
taskNumCount();
*/

/**Перевірка пароля*/

/*
function derPArol() {
    //Створюэм якийсь обєкт з обєктом юзера
    let user = {
        name: 'Nastya',
        password: 'pa$$w0rd!',
        age: 16,
    };
    //Ретьорнимо цылий обєкт з ключами
    return{
        getName: function () { //це функція яка ретьорнить user.name або любий інший елемент обєкту.
            return user.name
        },

        getAge: function () {
            return user.age
        },

        celebrate: function () { // це функція яка збільшує вік на 1 при кожному виклику
            user.age++
        },

        checkPassword: function (passwordToCheck) { //такою функцією ми перевіряєм пароль на валідність але не випускаєм пароль з області видимості.
            if (user.password !== passwordToCheck){ //Якщо пасворд то чек не збыгаэться з пасвордом в обэкті тоді виводим ерору
                throw new Error('Password is not correct')
            }
            console.log('----------------LOGGED----------------');// Якщо збігається тоді виводим логед
        },
        changePassword: function (newPassword, oldPassword) { //Функція зміни паролю приймає старий і новий пароль і змінює на новий тільки в тому випадку якщо старий збігається

            if (user.password !== oldPassword){
                throw new Error('OldPassword is not correct')
            }
            user.password = newPassword;

        }
    }
}

let Nastyona = derPArol(); //Присвоюєм основну функцію в змінну

console.log(Nastyona.getAge()); //Таким методом ми можемо виводити елементи задані в ретьорн
console.log(Nastyona.getName());
Nastyona.celebrate(); //Таким методом ми збільшуєм вік на 1.
console.log(Nastyona.getAge());

Nastyona.checkPassword('pa$$w0rd!');//А так ми викликаэм функцію перевірки паролю

Nastyona.changePassword('123456', 'pa$$w0rd!');

Nastyona.checkPassword('123456'); //Вже логынимся за новим паролем
*/
/**ЗАМИКАННЯ////*/


/**Arrow function & Anonymous function*/

/*

function user() {
    //Створюэм якийсь обєкт з обєктом юзера
    let user = {
        name: 'Victor',
        password: '12345',
        age: 23,
        car: false
    };
    //Ретьорнимо цылий обєкт з ключами
    return{
        getName:  () => { //Це стрілочіна функція вона викликається за допомогою => без слова фанкшн стрылочки після аргументу
            return user.name
        },

        getAge:  () => {
            return user.age
        },

        celebrate: () => { // це функція яка збільшує вік на 1 при кожному виклику
            user.age++
        },

        checkPassword: (passwordToCheck) => { //такою функцією ми перевіряєм пароль на валідність але не випускаєм пароль з області видимості.
            if (user.password !== passwordToCheck){ //Якщо пасворд то чек не збыгаэться з пасвордом в обэкті тоді виводим ерору
                throw new Error('Password is not correct')
            }
            console.log('----------------LOGGED----------------');// Якщо збігається тоді виводим логед
        },
        changePassword:  (newPassword, oldPassword) => { //Функція зміни паролю приймає старий і новий пароль і змінює на новий тільки в тому випадку якщо старий збігається

            if (user.password !== oldPassword){
                throw new Error('OldPassword is not correct')
            }
            user.password = newPassword;

        },
        buyCar:  (car) => {
            user.car = car;
        },
        getCar: () => {
            console.log(user.car);
        }
    }
}


let me = user();
me.buyCar({model: 'Volvo', year: 2008});

me.getCar();
*/

/**Використання стрылочних функцій в методах масивів*/

/*

let arr = [1,2,3,4,5,];

arr.forEach(value =>  /!*Якщо у функції один аргумент то можна дужки не писати*!/{
    value.log
});

arr.map(value => {return value*2});

arr.map(value => value * 2); //Якщо є стрілочна функція і один аргумент який щось ретьорнить не потрібно писати квадратних дужок і ретьорн

arr = arr.filter(value => value>25);
*/

/**Анонімні функції це функції без імені до яких ми можемо звертатись по ключі*/
/**Анонімні самовизиваючі функції*/

/*
((number) => {
    console.log('HELLOW WORLD ' + number);
})(66);//переші дужки ми функцію описуєм в других дужках ми функцію викликаєм
*/



/**JSON*/

/**XML це дуже строгий формат запису тому його складно поєднати з іншими мовами і важко побудувати*/
/**JavaScrip Object Notation JSON це правильний обэкт записаний по строгим правилам використовуэться для спылкування рызних частин ынтернету ы праграм написаних на рызних мовах програмування*/

let Victor = {
    name: 'Victor',
    password: '12345',
    age: 23,
    car: false,
    house: undefined // в JSON не попадке в JSON тому що він існує тільки в JS
    
};

console.log(Victor);
let jsoined = JSON.stringify(Victor); //метод stringify робить зы звичайного обєкта JSON- робить його стрінгою
console.log(jsoined);
let parced = JSON.parse(jsoined);
console.log(parced); //метод parse розпаршує JSON в зозумілий для мови обєкт.
/**
 План
 1. Робим таску з автомобілями
 2. Робим таску з автомобілями на замиканнях


 */


/**Таска з машинами перша
 Створити обєкт автомобіля з полями:Марка автомобля, потужність двигуна, власник, ціна, рік випуску.Власник автомобіля
 теж має бути обєкт, у якого є поляІмя, вік, стаж водіння.Створити не менше 7 та небільше 20 машинок.Зробили половину
 автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).На
 відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій). Для початку вкладіть всі наші створені
 автомобілі в масив cars.Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності
 двигуна на 10% та ціну на 5%Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років,
 але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід
 на 1 рік.Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі*/
/*
let cars = [
    {
        model: 'Seat Arona',
        enginePowerHP: 115,
        owner: {name: 'Yaroslav', age: 25, expYears: 2},
        price: 35000,
        year: '2018'
    },
    {
        model: 'Skoda Fabia',
        enginePowerHP: 80,
        owner: {name: 'Oleksandr', age: 25, expYears: 2},
        price: 5000,
        year: '2008'
    },
    {
        model: 'Fiat Doblo',
        enginePowerHP: 95,
        owner: {name: 'Oleg', age: 25, expYears: 6},
        price: 6500,
        year: '2007'
    },
    {
        model: 'For d Transit',
        enginePowerHP: 90,
        owner: {name: 'Nazar', age: 26, expYears: 4},
        price: 2000,
        year: '2000'
    },
    {
        model: 'Mercedes E225',
        enginePowerHP: 170,
        owner: {name: 'Oleksiy', age: 21, expYears: 2},
        price: 3500,
        year: '2000'
    },
    {
        model: 'Lada 21011',
        enginePowerHP: 80,
        owner: {name: 'Yan', age: 24, expYears: 5},
        price: 1500,
        year: '1976'
    },
    {
        model: 'Seat Leon',
        enginePowerHP: 230,
        owner: {name: 'Bogdan', age: 31, expYears: 4},
        price: 8000,
        year: '2008'
    },
    {
        model: 'Honda Civic',
        enginePowerHP: 300,
        owner: {name: 'Artur', age: 24, expYears: 6},
        price: 10000,
        year: '2010'
    }
];


let newOwners = [
    {name: 'Yan', age: 28, expYears: 15},
    {name: 'Igor', age: 73, expYears: 7},
    {name: 'Ira', age: 24, expYears: 4},
    {name: 'Ivan', age: 36, expYears: 2},
    {name: 'Victor', age: 24, expYears: 3},
    {name: 'Vova', age: 85, expYears: 9},
    {name: 'Dima', age: 24, expYears: 6},
    {name: 'Karina', age: 15, expYears: 7},
    {name: 'Petro', age: 24, expYears: 2},
    {name: 'Nastya', age: 18, expYears: 1},
];


/!**Збільшення потужності на циклах*!/

for (let i = 0; i < cars.length; i += 2) {
    const randomDriverIndex = parseInt(Math.random() * newOwners.length - 1);//Так ми створили індекси для нового масиву рандомні
    cars[i].enginePowerHP *= 1.10;
    cars[i].price *= 1.05;
    //переприсвоюэм водія кожній відремонтованій машині
    cars[i].owner = newOwners[randomDriverIndex];//переприсвоєння
    newOwners.splice(randomDriverIndex, 1);//видалення водія з масиву нових водіїв
}

/!**Відправляєм всіх водіїв які мають вік більше 25 і стаж менше 5 на курси, чим збільшуєм їх стаж на 1 рік.*!/
cars.map(car => {

    if (car.owner.age > 25 && car.owner.expYears < 5) {
        car.owner.expYears++;
    }

    return car;
});

/!**Рахуєм суму цін всіх машин через reduce*!/
const price = cars.reduce((previousValue, currentValue) => {

    return previousValue + currentValue.price
}, 0);

console.log(cars);
console.log(price);
console.log(newOwners);
*/


/**
 Робим таску з автомобілями на замиканнях
 пробуйте зробити таксопарк, який ви робили на одній з попередніх завдань. Але тепер шоб всі машинки були замкнуті.
 Тобто ззовні ви не могли їх отримати. І всі дії,я кі ви робили до того з машинками (збільшувати потужність і т.д.)
 зробитина методах, які ми вчора розглянули.Зробит метод збільшення потужності. Метод відправки водія на курси. Метод
 оновлення водіїв (приймаючи масив водіїв).Та змінити водія конкретній машинці. Отрмати всіх водіїв. Отримати всі авто.
 Отрмати конкретного водія. Отримати конкретне авто. Отримати ціну всіх авто.
 */

/*
function taxoPark() {

    let cars = [
        {
            model: 'Seat Arona',
            enginePowerHP: 115,
            owner: {name: 'Yaroslav', age: 25, expYears: 2},
            price: 35000,
            year: '2018'
        },
        {
            model: 'Skoda Fabia',
            enginePowerHP: 80,
            owner: {name: 'Oleksandr', age: 25, expYears: 2},
            price: 5000,
            year: '2008'
        },
        {
            model: 'Fiat Doblo',
            enginePowerHP: 95,
            owner: {name: 'Oleg', age: 25, expYears: 6},
            price: 6500,
            year: '2007'
        },
        {
            model: 'For d Transit',
            enginePowerHP: 90,
            owner: {name: 'Nazar', age: 26, expYears: 4},
            price: 2000,
            year: '2000'
        },
        {
            model: 'Mercedes E225',
            enginePowerHP: 170,
            owner: {name: 'Oleksiy', age: 21, expYears: 2},
            price: 3500,
            year: '2000'
        },
        {
            model: 'Lada 21011',
            enginePowerHP: 80,
            owner: {name: 'Yan', age: 24, expYears: 5},
            price: 1500,
            year: '1976'
        },
        {
            model: 'Seat Leon',
            enginePowerHP: 230,
            owner: {name: 'Bogdan', age: 31, expYears: 4},
            price: 8000,
            year: '2008'
        },
        {
            model: 'Honda Civic',
            enginePowerHP: 300,
            owner: {name: 'Artur', age: 24, expYears: 6},
            price: 10000,
            year: '2010'
        }
    ];

    let newOwners = [
        {name: 'Yan', age: 28, expYears: 15},
        {name: 'Igor', age: 73, expYears: 7},
        {name: 'Ira', age: 24, expYears: 4},
        {name: 'Ivan', age: 36, expYears: 2},
        {name: 'Victor', age: 24, expYears: 3},
        {name: 'Vova', age: 85, expYears: 9},
        {name: 'Dima', age: 24, expYears: 6},
        {name: 'Karina', age: 15, expYears: 7},
        {name: 'Petro', age: 24, expYears: 2},
        {name: 'Nastya', age: 18, expYears: 1},
    ];

    return {

        repair: () => {

            for (let i = 0; i < cars.length; i += 2) {
                const randomDriverIndex = parseInt(Math.random() * newOwners.length - 1);//Так ми створили індекси для нового масиву рандомні
                cars[i].enginePowerHP *= 1.10;
                cars[i].price *= 1.05;
                //переприсвоюэм водія кожній відремонтованій машині
                cars[i].owner = newOwners[randomDriverIndex];//переприсвоєння
                newOwners.splice(randomDriverIndex, 1);//видалення водія з масиву нових водіїв
            }

        },

        checkExperience: () => {

            cars.map(car => {

                if (car.owner.age > 25 && car.owner.expYears < 5) {
                    car.owner.expYears++;
                }

                return car;
            });

        },

        calculatePrice: () => cars.reduce((previousValue, currentValue) => previousValue + currentValue.price, 0),

        getCars: () => {

            console.log(cars);
        },

        getFreeOwners: () => {
            console.log(newOwners);
        }
    }
}

let CarsPark = taxoPark();

CarsPark.repair();//Виконуєм функцію ремонту і переприсвоєння.

CarsPark.checkExperience();//Виконуєм функцію перевірки досвіду і відправлення на курси.

CarsPark.calculatePrice();//Виконуєм функцію яка рахує ціни нак машини.

CarsPark.getCars();//Виконуєм функцію яка виводить нам всі макшини.

CarsPark.getFreeOwners();//Виконуєм функцію яка виводить нам всіх вільних водіїв.
*/

/**Copy & deep copy*/

/**Звичайа копія копіює обєкт лише на першому рівні а глибока на усіх.*/
/*
let object = {
    name: 'Karina',
    age: 18,
    expYears: 3,
    proffession: {

        title: 'Medikal',
        money: 100,
        companies: ['Borys', 'Zablotsky']
    }
};


let notDeep = Object.assign({}, object)// Так робиться не глибоке копіювання

notDeep.age = 22222222220;
notDeep.expYears = 7777777;
notDeep.proffession.money = 9999999999999999;

console.log(notDeep);

console.log('__________________');

console.log(object);
*/

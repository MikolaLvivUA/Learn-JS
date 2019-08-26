
/** Створити обєкт автомобіля з полями:
 Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
 Власник автомобіля теж має бути обєкт, у якого є поля
 Імя, вік, стаж водіння. */
let cars = [
    {model: 'Seat Arona', enginePowerHP: 115, owner: {name: 'Yaroslav', age: 25, expYears: 2}, price: 35000, year: '2018' },
    {model: 'Skoda Fabia', enginePowerHP: 80, owner: {name: 'Oleksandr', age: 25, expYears: 2}, price: 5000, year: '2008' },
    {model: 'Fiat Doblo', enginePowerHP: 95, owner: {name: 'Oleg', age: 25, expYears: 6}, price: 6500, year: '2007' },
    {model: 'Ford Transit', enginePowerHP: 90, owner: {name: 'Nazar', age: 26, expYears: 4}, price: 2000, year: '2000' },
    {model: 'Mercedes E225', enginePowerHP: 170, owner: {name: 'Oleksiy', age: 21, expYears: 2}, price: 3500, year: '2000' },
    {model: 'Lada 21011', enginePowerHP: 80, owner: {name: 'Yan', age: 24, expYears: 5}, price: 1500, year: '1976' },
    {model: 'Seat Leon', enginePowerHP: 230, owner: {name: 'Bogdan', age: 31, expYears: 4}, price: 8000, year: '2008' },
    {model: 'Honda Civic', enginePowerHP: 300, owner: {name: 'Artur', age: 24, expYears: 6}, price: 10000, year: '2010' },
    {model: 'Hyndai Sonata', enginePowerHP: 130, owner: {name: 'Sergiy', age: 47, expYears: 23}, price: 8000, year: '2009' },
    {model: 'Mersedes W140', enginePowerHP: 250, owner: {name: 'Taras', age: 35, expYears: 12}, price: 10000, year: '1995' },
    {model: 'BMW 735', enginePowerHP: 300, owner: {name: 'Dmytro', age: 34, expYears: 14}, price: 15000, year: '2003' },
    {model: 'Ford Focus', enginePowerHP: 200, owner: {name: 'Evgeniy', age: 28, expYears: 3}, price: 30000, year: '2018' },
    {model: 'Tesla model S', enginePowerHP: 400, owner: {name: 'Vasyl', age: 52, expYears: 30}, price: 50000, year: '2018' },
    {model: 'Chevrolet Aveo', enginePowerHP: 95, owner: {name: 'Mykola', age: 23, expYears: 4}, price: 5000, year: '2008' },
    {model: 'Ford Mustang', enginePowerHP: 350, owner: {name: 'Ivan', age: 29, expYears: 8}, price: 28000, year: '2015' },
    {model: 'Audi A3', enginePowerHP: 150, owner: {name: 'Sviatoslav', age: 25, expYears: 2}, price: 8500, year: '2008' },
    {model: 'Moskvich 412', enginePowerHP: 60, owner: {name: 'Roman', age: 26, expYears: 3}, price: 1000, year: '1974' },
    {model: 'KRAZ', enginePowerHP: 400, owner: {name: 'Valeriy', age: 34, expYears: 2}, price: 20000, year: '1975' },
    {model: 'Hummer H1', enginePowerHP: 450, owner: {name: 'Ira', age: 19, expYears: 1}, price: 50000, year: '2010' },
    {model: 'Smart', enginePowerHP: 110, owner: {name: 'Oleksandr', age: 20, expYears: 1}, price: 15000, year: '2010' },
];
//Нові водії на відремонтовані машини
let newDrivers = [
    {name: 'Ivan', age: 27, expYears: 3},
    {name: 'Vasyl', age: 32, expYears: 7},
    {name: 'Viktor', age: 45, expYears: 1},
    {name: 'Pavlo', age: 38, expYears: 9},
    {name: 'Lena', age: 34, expYears: 3},
    {name: 'Roman', age: 29, expYears: 2},
    {name: 'Anton', age: 42, expYears: 4},
    {name: 'Sergiy', age: 50, expYears: 6},
    {name: 'Bogdan', age: 34, expYears: 1},
    {name: 'Yura', age: 29, expYears: 3},
];

console.log(cars);
/**Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
 * Для початку вкладіть всі наші створені автомобілі в масив cars.
 Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%*/
console.log('______________________________________________________');
for (let i = 0; i < cars.length; i+=2) {

    cars[i].enginePowerHP = (cars[i].enginePowerHP * 1.10).toFixed(0);
    cars[i].price = (cars[i].price * 1.05).toFixed(0);

}
console.log(cars);
console.log('______________________________________________________');

/**На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).*/

for (let i = 0, j=0; (i < cars.length && j < newDrivers.length) ; i+=2 , j++ ) {

    cars[i].owner = newDrivers[j];

}

console.log(cars);

console.log('______________________________________________________');



/**Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший
 за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.*/
cars.map(function (value) {

     if (value.owner.expYears < 5 && value.owner.age > 25){

         value.owner.expYears += 1;
         return value.owner.expYears;

     }

 });
console.log(cars);

console.log('______________________________________________________');


/**Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі*/
//Варіант з reduce
let sumPrice = cars.reduce(function (prevVal, currVal) {

    return prevVal + parseInt(currVal.price)
}, 0);
console.log(sumPrice);

//Варіант з циклом
let sum = 0;
for (let i = 0; i < cars.length; i++) {

    sum += parseInt(cars[i].price)

}
console.log(sum);
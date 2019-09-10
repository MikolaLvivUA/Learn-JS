/**Спробуйте зробити таксопарк, який ви робили на одній з попередніх завдань. Але тепер шоб всі машинки були замкнуті.
 обто ззовні ви не могли їх отримати. І всі дії,я кі ви робили до того з машинками (збільшувати потужність і т.д.)
 зробитина методах, які ми вчора розглянули.Зробит метод збільшення потужності. Метод відправки водія на курси. Метод
 оновлення водіїв (приймаючи масив водіїв). Та змінити водія конкретній машинці. Отрмати всіх водіїв. Отримати всі
 авто. Отрмати конкретного водія. Отримати конкретне авто. Отримати ціну всіх авто.*/

function taxiPark () {
    let carOption = [];
    let NewDrivers = [];
    let carID = 1;
           return  {
               getOptionLog: () => console.log(carOption),

               getAddCar:  (model, enginePower, price, owner, year) => {
                   carOption.push({model: model, enginePower: enginePower, price: price, owner: owner, year: year, carID: carID++});
               },

               getTuningEngine: () => {

                   carOption.map(value => {if (value.carID % 2 === 0){
                       value.enginePower = (value.enginePower * 1.10).toFixed(0);
                       value.price = (value.price * 1.05).toFixed(0);
                        }
                   })
               },

               getMakeNewDriver: (name, age, expYears) => {

                   NewDrivers.push({name: name, age: age, expYears: expYears, id: (carID % 2 === 0)})

               },


}





    };


let car = taxiPark();

car.getOptionLog();
console.log('**************************************************************************************************************************');
car.getAddCar('Volvo', 180, 30000, {name: 'Valeriy', age: 34, expYears: 2}, '2008');
car.getAddCar('Seat Arona', 115, 35000, {name: 'Yaroslav', age: 25, expYears: 2}, '2018');
car.getAddCar('Skoda Fabia', 80, 5000, {name: 'Oleksandr', age: 25, expYears: 2}, '2008');
car.getAddCar('Fiat Doblo', 95, 6500, {name: 'Oleg', age: 34, expYears: 2}, '1957');
car.getAddCar('Ford Transit', 90, 2000, {name: 'Nazar', age: 26, expYears: 4}, '2000');
car.getAddCar('Mercedes', 170, 3500, {name: 'Oleksiy', age: 21, expYears: 2}, '2000');
car.getAddCar('Lada', 80, 1500, {name: 'Yan', age: 24, expYears: 5}, '1976');
car.getAddCar('Seat', 230, 8000, {name: 'Bogdan', age: 31, expYears: 4}, '2008');
car.getAddCar('Moskvich', 60, 400, {name: 'Jeniya', age: 34, expYears: 2}, '1957');
car.getAddCar('Mustang', 400, 30000, {name: 'Victor', age: 23, expYears: 5}, '2018');
car.getOptionLog();
console.log('**************************************************************************************************************************');
car.getTuningEngine();
car.getOptionLog();
console.log('**************************************************************************************************************************');
car.getMakeNewDriver('Andriy', 35, 3);
car.getMakeNewDriver('Anton', 31, 4);
car.getMakeNewDriver('Roman', 29, 2);
car.getMakeNewDriver('Vasyl', 45, 10);
car.getMakeNewDriver('Anatoliy', 26, 8);
console.log('**************************************************************************************************************************');

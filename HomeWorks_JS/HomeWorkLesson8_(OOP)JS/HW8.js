/**1.создать класс которы описывает машину. класс должен содержать 5-6 полей и функцию info()
 которая выводит инфрмацию про экземпляр класса (объект который вы создали)
 создать 10 различных экземпляров

 2. Унаследовать класс Car в классе SuperCar. Добавить 3 новых поля.
 создать 10 различных экземпляров

 на основе предыдущего задания создать классы которые описывают
 - Продукт
 - категорию
 - Магазин
 */
function taskCounter() {

    let taskNum = 1;
    return () => console.log('*********************'+'Task' + (taskNum++) + '*************************');
}
let taskNumCount = taskCounter();


/**Task1*/

class Car {
    constructor(brand, model, year, engineCapacity, EnginePower) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.engineCapacity = engineCapacity;
        this.EnginePower = EnginePower;
    }

    carInfo(){
        console.log(this);

    }

}




let SeatArona = new Car('Seat', 'Arona', '2018', 1.0, 120 );

let SeatAteca = new Car ('Seat', 'Ateca', '2018', 2.0, 150);

let SeatAlhambra = new Car ('Seat', 'Alhambra', '2017', 1.5, 90);

let SeatLeon = new Car('Seat', 'Leaon', '2017', 2.0, 230);

let Kopeyka = new Car ('Lada', '2101', '1976', 1.3, 80);

let FordTransit = new Car ('Ford', 'Transit', '2000', 1.8, 100);

let Mercedes = new Car ('Mercedes', 'W140', '1996', 5.0, 230);

let FiatDoblo = new Car ('Fiat', 'Doblo', '2008', 1.8, 95);

let ChevroletAveo = new Car ('Chevrolet', 'Aveo', '2008', 1.5, 85);

let BugattiVeyron = new Car ('Bugatti', 'VeyronSuperSport', '2017', 16.0, 1200);


SeatArona.carInfo()

taskNumCount();

class SuperCar extends Car{
    constructor(brand, model, year, engineCapacity, EnginePower, nitro, raceVersion){
        super (brand, model, year, engineCapacity, EnginePower);
        this.nitro = nitro;
        this.raceVersion = raceVersion;

    }

}

let Lambergini = new SuperCar('Lambergini', 'Galardo', '2010', 9.0, 900,
    true, false);

let FordMustang = new SuperCar('Lambergini', 'Galardo', '2010', 9.0, 900,
    true, false);

let ChevroletCamaro = new SuperCar('Lambergini', 'Galardo', '2010', 9.0, 900,
    true, false);

let DodgeCharger = new SuperCar('Lambergini', 'Galardo', '2010', 9.0, 900,
    true, false);

let MercedesSLS = new SuperCar('Lambergini', 'Galardo', '2010', 9.0, 900,
    true, false);

let AstonMartin = new SuperCar('Lambergini', 'Galardo', '2010', 9.0, 900,
    true, false);

let Ferrari = new SuperCar('Lambergini', 'Galardo', '2010', 9.0, 900,
    true, false);

Lambergini.carInfo(Lambergini);

taskNumCount();



class Product {
    constructor(brand, type) {
        this.brand = brand;
        this.type = type;
    }
    productInfo(productName){
        console.log(this);
    }
}

let Milk = new Product('Селянське', 'Молоко');

let Pelmeny = new Product('Левада', 'Пельмені' );

class Category extends Product {
    constructor(brand, type, category){
        super (brand, type);
        this.category = category;
    }
}

let SourCream = new Category('Селянське', 'Сметана', 'Молочні продукти');

class Shop extends Category{

    constructor(brand, type, category, shopName, availability){
        super(brand, type, category);
        this.shopName = shopName;
        this.availability = availability;
    }

}

let ChickenMeet = new Shop('Родинна Ковбаска', 'Куряче Філе', 'Мясні продукти', 'Родинна ковбаска', true);


ChickenMeet.productInfo(ChickenMeet);
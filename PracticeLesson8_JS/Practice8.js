class User {
    constructor(name, age, sex, height, weight, car, house){

        this.name = name;
        this.age = age;
        this.sex = sex;
        this.height = height;
        this.weight = weight;
        this.car = car;
        this.house = house;
    }

    toString(){
        console.log(this);
    }

}

let Mykola = new User('Mykola', 23, 'man', 173, 80, false, true);
let Yaroslav = new User('Yaroslav', 25, 'man', 170, 70, true, true);
let Oleksiy = new User('Oleksiy', 20, 'man', 170, 80, true, true);
let Oleg = new User('Oleg', 25, 'man', 190, 89, true, true);
let Yan = new User('Yan', 24, 'man', 170, 80, true, true);
let Roman = new User('Roman', 24, 'man', 169, 95, false, true);
let Vasyl = new User('Vasyl', 29, 'man', 165, 120, false, true);
let Bogdan = new User('Bogdan', 30, 'man', 180, 145, true, true);
let Viktoria = new User('Victoria', 24, 'woman', 160, 60, true, true);
let Oleksandra = new User('Oleksandra', 27, 'woman', 165, 65, false, true);

let userArr = [Mykola, Yaroslav, Oleksiy, Oleg, Yan, Roman, Vasyl, Bogdan, Viktoria, Oleksandra];



/**Протокол пошуку попелюшки
 Створити клас попелюшка з полями імя, вік, розмір ноги;
 Створити 10 попелюшок;
 Створити обєкт класу Принц якмй має обєкт імя вік туфелька яку він знайшов;
 */



class Cinderella {
    constructor(name, age, legSize){
        this.name = name;
        this.age = age;
        this.legSize = legSize;
    }
}

let Cinderella1 = new Cinderella('Alisa', 23, 39);
let Cinderella2 = new Cinderella('Vivienna', 20, 35);
let Cinderella3 = new Cinderella('Anna', 18, 37);
let Cinderella4 = new Cinderella('Matilda', 19, 38);
let Cinderella5 = new Cinderella('Jordana', 22, 36);
let Cinderella6 = new Cinderella('lesly', 20, 42);
let Cinderella7 = new Cinderella('Jenifer', 23, 41 );
let Cinderella8 = new Cinderella('Cinderella8', 25, 34);
let Cinderella9 = new Cinderella('Cinderella9', 24, 33);
let Cinderella10 = new Cinderella('Cinderella10', 20, 30);


class Prince {
    constructor(name, age, shoeSize){
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

let Prince1 = new Prince('Leonardo', 25, 35);


let cinderellaArr =[Cinderella1, Cinderella2, Cinderella3, Cinderella4, Cinderella5, Cinderella6, Cinderella7,
                    Cinderella8, Cinderella9, Cinderella10];

let shoeSize = Prince1.shoeSize;

function finder(cinderellaArr =[]) {

    cinderellaArr.forEach(value => {

        if (value.legSize === shoeSize){
            console.log('this shoe, which found by Prince, belongs to ' + value.name)
        }

    })
}


finder(cinderellaArr);
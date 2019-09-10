/**ФУНКЦІОНАЛЬНЕ ООП*/

/**Класи - class це синтаксичний цукор пыд капотом це звичайні функції*/


/**Конструктор екземплярів класів за допомогою функції*/
/*
function User(name, age) {
    this.name = name;
    this.age = age;
    //так можна оголошува методи класів
    this.sayHello = () => {
        console.log(`Hello! My name is ${this.name}`)
    }
}


let Viktor = new User ('Viktor', 23); //Екземпляри класів створюються аналогічно як і з класами
let Dimas = new User('Dima', 23);



console.log(Viktor.name);
Viktor.sayHello();
//Так виконуэться метод класу
Dimas.sayHello();
*/



/**Наслідування в функціональному ООП*/
/*
function User(name, age) {
    this.name = name;
    this.age = age;
    //так можна оголошува методи класів, але так робити не добре краще поведінку задавати в прототипах;
    // this.sayHello = () => {
    //     console.log(`Hello! My name is ${this.name}`)
    // }
}

let Viktor = new User ('Viktor', 23);

function Developer(name, age, skill) {
    this.name = name;
    this.age = age;
    this.skill = skill;
}

let Tanya = new Developer('Tanya', 22, '.NET');

/!*Прототип це функцыэ в яку задають спыльну поведынку всіх екземплярів деного класу*!/
// console.log('______________________');
// console.log(User.prototype);
// console.log('______________________');

/!*
User.prototype.sayHello = () => {
    console.log(`Hello! My name is ${this.name}`) /!*Вивиде undefined тому що стрілочна функція не має свого this і тоді
                                                    він зсилається на глобальну область.*!/
};
*!/

/!*А таким методом вже буде працювати тому що функцыя маэ свый this, для всіх екземпларів класу USER буде спіьною*!/
User.prototype.sayHello = function () {
    console.log(`Hello! My name is ${this.name}`)
};

Viktor.sayHello();


/!*Наслідування*!/
// Developer.prototype.__proto__ = User.prototype;
/!*АБО*!/
// Developer.prototype = User.prototype;
/!*АБО*!/
Developer.prototype = Object.create(User.prototype);//Якщо ми захочемо переприсвоїти прототип сейХелло для девелопера то
                                                  //для юзера він не зміниться.

Tanya.sayHello();
*/

/**ПРИКЛАД з хомяками*/

/*
function Hamster(name) {
    this.name = name;
    this.stomach = [];//У кожного свій живіт
}

Hamster.prototype.findFood = function (food) {

    this.stomach.push(food);

};

/!*Hamster.prototype.stomach = [];//Знайдена їда одним хомяком попаде в шлунки всіх тому що шлунки є в прототипеі і
                                // спільні для всіх*!/

let ravlik = new Hamster('Ravlik');
let myshka = new Hamster('Myshka');

console.log(ravlik.stomach);
console.log(myshka.stomach);

console.log('________________________');

ravlik.findFood('Chery');
ravlik.findFood('Banana');

console.log(ravlik.stomach);
console.log(myshka.stomach);
*/

/**Привязка this, Call і Aply*/

function sayHello() {
    console.log(`Hello. My name is ${this.name}`)
}

let Victor = {
    name: 'Viktor'
};

let Dictor = {
    name: 'Diktor'
};





//Привязка контексту
sayHello.call(Victor);
sayHello.call(Dictor);
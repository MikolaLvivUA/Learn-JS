/**ООП*/
/**ООП - це Обєктно орієнтоване програмування- ця парадигма говорить нам що все є обєктом і має свої параметри*/
/**В JavaScript є функціональне і класове ООП*/

/**
 ООП маэ 5 принципів ООП осоновних три: Інкапсуляція, Наслідування, Поліморфізм 2 інших це Абстракція, і хз шо))).

 (1.)Наслідування - це можливість дитини наслідувати властивості(параметри) батьківського обєкта, і може не мати тих
 параметрів шо має батьківський обєкт, але може мати параметри яких батьківський не має.

 (2.)Інкапсуляція - це коли ми вкладаєм щось складне в щось простіше , наприклад огортаєм багато властивостей методів
 і т.д в простішу огортку.

 (3.)Поліморфізм - Це властивисть обэктів називатись однаково але виконувати різні дії взалежності від прийнятих
 параметрів тим обєктом.

 (4.)Абстракція - Це абстрактний клас екзеимпляр якого не можливо створити, він виступає батьком інших класів, зроблений
 для того щоб від нього наслідуватись. В JavaScript показати абстракцію не можливо, так як в ньому немає абстрактних
 класів.
 */

/**Типовий клас*/
/*
class Human /!*Назва класу пишеться з великої букви *!/{
    //Ключове слово constructor це функція з якоъ скаладаэться клас
    constructor(name, age, car){
        this.name = name; //this зсилається на те в чому він був викликаний в даному випадку на Human;
        this.age = age;
        this.car = car;
    }
}

let Viktor = new /!*Нові екземпляри класів оголошуються з приствкою new*!/ Human('Viktor', 23, false);
let Taras = new Human('Taras', 20, true);

console.log(Taras.name);
console.log(Viktor.age);
console.log(Viktor.car);
*/


class Human {
    constructor(name , age){
        this.name = name;
        this.age = age;
    }

    greeteng(){ //Так описуэться метод класу
        console.log(`Hello humans. My name is ${this.name}`);
    }
}

let Viktor = new Human('Victor', 23);
let Petka = new Human('Petka', 88);

class Developer extends Human{
    constructor(name, age, skill){
        super(name , age);//Цим викликаэм унаслыдовані параметри
        this.skill = skill;

    }
}

let Dimas = new Developer('Dimas', 20, 'noob');




class TeamLead extends Developer{
    constructor(name, age, skill, project, reward){
        super(name, age, skill);
        this.project = project;
        this.reward = reward;
    }

    greeteng() {
        console.log(`Hello guys! Welocome to ${this.project} project`)
    }
    //Приклад мінімальної інкапсоляції
    raiseReward(money){
        let tenPercent = this.reward * .1;

        if (money > tenPercent){
            throw new Error('Bagato hochesh')
        }

        this.reward += money;

    }

    /*Геттери і Сеттреи Гет - це отримати сет це щось поставити*/

    get prj(){
        throw new Error('NDA')
    }

    set prj(newProject){
        this.project = newProject;
    }





}

let Oksana = new TeamLead('Oksana', 23, 'PHP', 'FreeHost', 200);

Viktor.greeteng(); //Так ми викликаэм методи класів
Petka.greeteng();
Dimas.greeteng();//Дімас може виконувати всі методи унаслідованого обєкта
Oksana.greeteng();
Oksana.raiseReward(20);

Oksana.prj = 'Lol'; //Так ми виконуэ сетер він сам розуміє що йому треба за сетити шось

console.log(Oksana.prj); //Tак гетер викликається і розуміє що ми хочимо отримати проджект
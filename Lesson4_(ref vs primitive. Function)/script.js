// ОБЛАСТЬ ВИДИМОСТІ (Різниця між var і let)


/*
let x = 0;
var xx = 9;

{
    //Це блок виконання
    console.log(xx);
    console.log(x);
    let z = 22; //Оголошуэм let в області виконання
    var es = 223; //Оголошуєм var в області виконання
}

/!*console.log(z);// цю змінну не буде бачити тому що змінна оголошена в іншому блоці виконання*!/
console.log(es); //Var ігнорує блок виконнаня тому її не використовують.*/

//__________________________________________________________________________________________________________________

//ФІШКИ з Інкрементами Декриментами
/*let i=0;
/!*let b= i++;*!/     //Якщо ми задамо значення ось так це оначає що ми спочатку присвоюєм змінній b значення i яке дорівнює 0, а
                    //а потім аж виконуєм ++ і тоді змінна (і) стає 1;

let b= ++i;         //Якщо ми задамо значення ось так це означаэ що спочатку виконуэться дія ++ і збільшується а потім вже
                    //значення збільшеної і присвоюється b;

console.log(i);
console.log(b);*/
//___________________________________________________________________________________________________________________


//CONVERT TO BOOLIAN

/*let x = 0;

let smtToBool = !!x; //Таким записом ми конвертуєм значення в буліан, конвертувати можна масиви обєкти стрінги але 0, null, NaN, undefined і
                    // і пуста стрінга дає false i !true також дає false

console.log(smtToBool);*/

//Перевірка на значення (Конвертацію в буліан)
/*let id = '2';

let isNumber = +id /!*таким записом ми пробуєм зробити значення number*!/ || 100;

console.log(isNumber);*/

//___________________________________________________________________________________________________________________

//ТИПИ ДАНИХ JS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/**В JS є 7 типів даних, 3 простих і 4 силочних*/
/**Прості ( primitives): boolian, string, number, undefined*/
/**Силочні (referns): object, null, symbol*/

/*
let a = 22;
let b = a;

b = 90;
console.log(a);
console.log(b);
*/

/*let obj = {a: 20, b: 999};

let antObj = obj;

antObj.a = 17;
obj.b = 6;

console.log(antObj); //виводить 17 і 6 тому що силочні типи дані не копіюють а зсилаються на те що оголошено вище
                    // (просто зберыгаэ силку на obj)
console.log(obj);   //Те саме!*/

/*let arr = [1,2,3,4,5];

let refArr = arr;

refArr[0] = 55;
arr[2] = 99999;

console.log(refArr); //те саме що ы з обєктами*/
//_____________________________________________________________________________________________________________________



//СТВОРЕННЯ ВЛАСНОЇ Error





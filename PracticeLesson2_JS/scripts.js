
//Task1

/*Три різних числа вводяться через prompt().
За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)*/

let a= +prompt('Please enter the first number')
let b= +prompt('Please enter the second number')
let c= +prompt('Please enter the second number')

if (a<b && b<c){
    console.log(a);
    console.log(b);
    console.log(c);
}

if(b<a && a<c){
    console.log(b);
    console.log(a);
    console.log(c);
}

if(b<c && c<a){
    console.log(b);
    console.log(c);
    console.log(a);
}

if (c<b && b<a){
    console.log(c);
    console.log(b);
    console.log(a);
}

if(c<a && a<b){
    console.log(c);
    console.log(a);
    console.log(b);
}

if(a<c && c<b){
    console.log(a);
    console.log(c);
    console.log(b);
}else {
    console.log('Error')
}


//Task2

/*Все параматры получаем с клавиатуры!!!!
Имитируем поведение пешехода на перекстке.
Если светофор зеленый - вывести "иди".
Если светофор желтый - вывести "подожди".
Если светофор красный - вывести "стой".
Если светофор в аварийном режиме вывести "делай что хочешь"!*/

/*
let svitlofor=prompt('Plase enter color')

switch (svitlofor) {
    case 'green':
        alert('GO');
        break;
    case 'yellow':
        alert('WAIT');
        break;
    case 'red':
        alert('RED')
        break;
    default:
        alert('Just do what you want')

}*/


//Task3

/*Все параметры получаем с клавиатуры!!!!(prompt , confirm)
Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
Улучшаем предыдущее задание.
Если светофор зеленый и машин нет - вывести "иди".
Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
Если светофор желтый и машины есть - вывести "жди".
Если светофор желтый и машин нет - вывести "все рано жди".
Если светофор красный и машин нет- вывести "стой все рано".
Если светофор красный - и машины есть вывести "стой и жди".
Если светофор в аварийном режиме вывести "делай что хочешь"!*/

/*
let svitlofor=prompt('Please enter color')

let isRoadClear=confirm('Is road Clear?')

if (svitlofor==='green' && isRoadClear){
    alert('GO!')
}else if (svitlofor==='green' && !isRoadClear){
    alert('Wait when car left')
} else if (svitlofor==='yellow' && !isRoadClear){
    alert('Wait')
} else if (svitlofor==='yellow' && isRoadClear){
    alert('Wait')
} else if(svitlofor==='red' && !isRoadClear){
    alert('STOP')
}else if (svitlofor==='red' && isRoadClear){
    alert('STOP')
} else{
    alert('Do what you want')
}
*/


//Task4
/*Трьохзначне число вводиться через prompt , розбити його на окремы цифри ы розставити ъх в порядку зростання*/


/*let number=prompt('enter 3rd numbers')

let a=number%10;
let b=parseInt(number/10)%10;
let c=parseInt(number/100);

if (a<b && b<c){
    console.log(a + '' + b + '' + c)
} else if(b<a && a<c){
    console.log(b + '' + a + '' + c)
}else if(b<c && c<a){
    console.log(b + '' + c + '' + a)
}else if (c<b && b<a){
    console.log(c + '' + b + '' + a)
}else if(c<a && a<b){
    console.log(c + '' + a + '' + b)
}else if(a<c && c<b){
    console.log(a + '' + c + '' + b)
}else {
    console.log('Error')
}*/




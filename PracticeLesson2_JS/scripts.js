
//Task1

/*
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
}*/


//Task2

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

let number=prompt('enter 3rd numbers')

let a=number%10;
let b=(number/10)%10;
let c=number/100;




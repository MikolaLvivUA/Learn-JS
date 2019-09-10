

//Random number to some sum;
// let min = Math.random()*59;
let min = +prompt('Enter number from 1 to 59');


if (min<=15 && min!=0) {
    console.log('The First quoter')
} else if (min>=16 && min<=30){
    console.log('The Second quoter')
} else if (min>=31 && min<=45){
    console.log('The third quoter')
}else if(min>=46 && min<=59){
    console.log('The Forth quoter')
}else if (min<=0 || min>59){
    console.log('Error')
}

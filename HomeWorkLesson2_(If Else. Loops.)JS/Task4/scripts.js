let month = +prompt('Enter the number of month');


/*
switch (month) {
    case 1||2||12:
        console.log(`Winter`);
        break;
    case 3||4||5:
        console.log(`Spring`);
        break;
    case 6||7||8:
        console.log(`Summer`);
        break;
    case 9||10||11:
        console.log(`Autumn`);
        break;
    default :
        console.log('Not a month')

}*/


if (month===1||month===2||month===12){
    console.log('Winter');
}

if (month===3||month===4||month===5){
    console.log('Spring');
}

if (month===6||month===7||month===8){
    console.log('Summer');
}

if (month===9||month===10||month===11){
    console.log('Autumn');
}

if (month<=0 || month>12 ){
    console.log('Not a month')
}
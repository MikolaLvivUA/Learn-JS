let num=+prompt('Write a number 1 to 4');

let result;

switch (num) {
    case 1:
        result='Winter'
        console.log(result)
        break

    case 2:
        result='Spring'
        console.log(result)
        break

    case 3:
        result='Summer'
        console.log(result)
        break

    case 4:
        result='Autumn'
        console.log(result)
        break
    default:
        console.log('Please enter correct number')
}
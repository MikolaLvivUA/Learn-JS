// створити пустий масив та : - заповнити його 50 парними числами за допомоги циклу.
// - заповнити його 50 непарними числами за допомоги циклу.

let arr = [];

/*while (arr.length<50){
    let randomNumber = parseInt(Math.random() * 999) //Generuem randomne chyslo vid 0 do 999

    if (randomNumber % 2 ===0){
        arr.push(randomNumber)
    }
}

console.log(arr);*/


console.log('__________________________');

while (arr.length<50){
    let randomNumber = parseInt(Math.random() * 999) //Generuem randomne chyslo vid 0 do 999

    if (randomNumber % 2 != 0){
        arr.push(randomNumber)
    }
}

console.log(arr);
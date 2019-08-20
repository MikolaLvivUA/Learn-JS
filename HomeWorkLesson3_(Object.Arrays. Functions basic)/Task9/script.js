//всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

let arr = [2,17,13,6,22,31,45,66,100,-18];


//task 1 reverse

/*let i = 9;

while (i >= 0){
    console.log(arr[i]);
    i--
}*/




//Task2 reverse === Task8




//Task3 reverse

/*let i = 9;

while (i >= 0){
    if (i % 2 != 0){
        console.log(arr[i]);
    }
    i--
}*/




//Task4 reverse

/*for (let i = 9; i >= 0; i--) {
    if (i % 2 != 0){
        console.log(arr[i]);
    }
}*/




//Task5 reverse

/*let i = 9;

while (i >= 0){
    if (arr[i] % 2 === 0){
        console.log(arr[i]);
    }
    i--
}*/





//Task 6 reverse

/*for (let i = 9; i >= 0; i--) {
    if (arr[i] % 2 === 0){
        console.log(arr[i]);
    }
}*/





// Task 7 reverse

for (let i = 9; i >= 0; i--) {
    if (arr[i] % 3 === 0){
        arr[i] = 'Okten';
    }
    console.log(arr[i])
}



//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та: перебрати циклом for та вивести  числа тільки з
// непарним індексом

let arr =  [ 2,17,13,6,22,31,45,66,100,-18 ];

for (let i = 0; i < arr.length; i++) {
    if (i % 2 != 0){
        console.log(arr[i]);
    }

}
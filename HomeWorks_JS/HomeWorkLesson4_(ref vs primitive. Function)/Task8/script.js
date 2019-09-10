/** створити метод який :  приймає масив та число (i). та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"*/



function lastTask(array, i) {

    if (!Array.isArray(array) || typeof i !== 'number'){
        throw new Error('Bad Request')
    }
    if (i < 0 || i > array.length - 1){
        throw new Error('i is not correct')
    }
    console.log(array);
    let valuesToChange = array[i];

    array[i] = array[i+1]
    array[i+1] = valuesToChange

    return array;
}

let changedArray = lastTask([3,412,42,4,1234,3124,13,413,41], 3);

console.log(changedArray);
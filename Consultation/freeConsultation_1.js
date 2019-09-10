//
// function action(action) {
//
//     if (action)
//
// }
//
// function calc(a, b, cb) {
//
//     const sum = a + b;
//
//     setTimeout(function () {
//         return cb(sum);
//     }, 1000)
//
// }
//
// calc(5,10,function (sum) {
//     console.log(sum);
// })


let arr = [4,64,94,2,65489,53,46,498,56,4]


// function sort(arr=[], way , cb) {
//
//
//         let sortedASK = arr.sort(function (a, b) {
//
//             return a - b;
//
//         });
//
//         let sortedDESK = arr.sort(function (a, b) {
//
//             return b - a;
//
//         });
//
//         if (way === 'ASK'){
//             cb(sortedASK)
//         }
//
//         if (way === 'DESK'){
//             cb(sortedDESK)
//         }
// }
//
// sort(arr, 'DESK', function () {
//     console.log(arr);
// })

function sort(arr=[],  way, cb) {

    return cb(way)
}

sort(arr, 'ASK', function (way) {
    if (way === 'ASK'){
        arr.sort(function (a, b) {
            return a - b
        })
        console.log(arr);
    }
    else if (way === 'DESK'){

        arr.sort(function (a, b) {
            return b - a
        })
        console.log(arr);

    } else {
        throw new Error('ERROR WAY')
    }
});



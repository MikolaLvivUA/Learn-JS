let arr = [5,[1,4,5,6], 5, 2, [3, 5, 6]];
i = 0;

function recursion() {

    if (i < arr.length){

        if (Array.isArray(arr[i])){

            arr[i].forEach(function (value) {
                console.log(value);
            });

        }
        if (!Array.isArray(arr[i])){
            console.log(arr[i]);
        }

        i++;
        recursion();

    }

}

recursion();


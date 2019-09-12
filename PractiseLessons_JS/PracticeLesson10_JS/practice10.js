let i = 0;


function printer(string) {
    let delay = parseInt(Math.random() * (500 - 100) + 100);

    setTimeout(() => {

        if (i < string.length) {
            console.clear();
            console.log(string.slice(0, i + 1));

            i++;
            printer('Hello World');


        } else {
            function reversePrinter(string) {

                if (i > 0) {
                    console.clear();
                    console.log(string.slice(string.length, 0));

                    i--;
                    reversePrinter('Hello World');

                }
            }
            reversePrinter('Hello World')
        }
    }, delay);
}

printer('Hello World');


/**Task 2*/

/*
for(var i = 1; i < 10; i++) {

    setTimeout(function(){

        return i;

    },0);

    console.log(i);
}
*/


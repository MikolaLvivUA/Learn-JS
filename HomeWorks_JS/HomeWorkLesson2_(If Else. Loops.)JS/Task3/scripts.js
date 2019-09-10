let a= +prompt('Write NumberA');
let b= +prompt('Write numberB');

if (a<=1 && b>=3) {
    console.log(a+b);
} else {
    console.log(a-b);
}

//Ternarny operator

if (a<=1 && b>=3) ? console.log(a+b) : console.log(a-b);
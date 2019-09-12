Array.prototype.newM = function () {

    console.log('Hello World');

};


Array.prototype.minValue = function(){

    console.log(Math.min(...arr))

};

Array.prototype.minString = function() {

    let minlenght = this[0];

    for (let i = 1; i < this.length; i++) {

        if (minlenght.length > this[i].length){
            minlenght = this[i]
        }

    }
    console.log(minlenght);
};

Array.prototype.findIdField = function

let arr = [2,6,464,64,61,5,8,591,561];
let arr2 = [1,5,-3];
let arr3 = ['Mym', 'Name', 'is', 'uuuuuuuuI'];

let arr4 = [
    {name: Mykola , id: 1},
    {name: Vasyl },
    {name: Petro , id: 1},
    {name: Katia}
];



/*arr.newM();

arr2.minValue(arr2);*/

arr3.minString();


Array.prototype.Myforeach = function (cb) {

    let i;
    let lenght = this.length;
    for (i=0; i<lenght; i++){
        cb(this[i])
    }
};


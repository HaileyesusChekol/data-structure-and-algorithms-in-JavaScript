'use strict'

//destructuring an array
const arr =['hello','this','is','destructuring'];

let [x,y,a,b] =arr;
console.log(x,y,a,b);

//switching the value by destructuring
[x,y]=[y,x]
console.log(x,y);

//destructuring array from object
const hotel = {
    breakFast : ['pizza','burger'],
    dinner :['juice','vegitabel'],
    order: function(indexOne,indexTwo){
        return [this.breakFast[indexOne], this.dinner[indexTwo]];
    }
}
const [food] = hotel.breakFast;
console.log(food);
console.log(hotel.order(0,1));


//destructuring
const [starter,final] = hotel.order(0,1);
console.log(starter,final);
























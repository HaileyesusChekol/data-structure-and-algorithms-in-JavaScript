'use strict';
console.log('-------desttructuring from object------')
const restaurant = {
  names: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  catagories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery:function({indexStarter, indexFinal,price,time,address,street}){
    console.log(`delived! ${[this.mainMenu[indexStarter], this.mainMenu[indexFinal]]}, to ${address} street ${street} on ${time} price = ${price} , ThankYou`);
  }
};
 
restaurant.orderDelivery({
    indexStarter:0,
    indexFinal:1,
    price:19.99,
    time: "8:00 pm",
    address:'AddisAbeba bole subsity',
    street:"09"
})

   //destructuring from objects
const {names, catagories, openingHours }= restaurant;
console.log( names, catagories, openingHours);

const  {names: restaurantName , 
    catagories: tags ,
     openingHours:hours }= restaurant;

console.log(restaurantName, tags , hours);

//destructuring nested object

const {fri}=openingHours;
console.log (fri);

const {open : began ,close: end}=fri;
console.log(began,end);


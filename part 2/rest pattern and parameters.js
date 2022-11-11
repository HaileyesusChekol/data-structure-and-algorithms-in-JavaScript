'use script'

//rest operator in array
const arr=['a','b','c'];

const[x, ...other] =arr;
console.log(x, other);

//rest operator  and parameters in object

const hotel ={
    hotelName : "ras hotel",
    address : "addis abeba",
    Breakfast: ['pizza', 'burger' , 'doro wot' ,'ketfo'],
    juice: ['apple', 'mango' , 'papaya' ,'avocado'],
    openingHour: {
        mon : '8pm',
        tue : '9pm',
        sat : '10pm'
    }, 

    deliver :function(ingrident1,ingrident2,...other){
        console.log(ingrident1 ,ingrident2 , other);
    }

}

const [pizza,  ...restOne] = [...hotel.Breakfast];
console.log(pizza , restOne);

hotel.deliver(...hotel.Breakfast);

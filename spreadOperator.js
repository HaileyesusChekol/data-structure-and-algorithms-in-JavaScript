'use strict'

console.log('-----spread operator-----');
const array = [1,2,3];
const newArr = [0,...array]; //use spread operator to combine array
console.log(newArr);
console.log(...array); //use spread operator to log array individualy


//spread operator on string

const personName = 'kenenisa';
const copyPersonName =[...personName];
console.log(...copyPersonName);


//spread operator in obj
const objs ={
    name1:'kenenisa',
    ageOf:23,
    fam:['mother','father'],
    call:function(call1,call2){
        console.log(`'let\'s call ${call1}, ${call2}`);
    }
}

objs.call(...objs.fam);

const copy = [...objs.fam];
console.log(...copy);

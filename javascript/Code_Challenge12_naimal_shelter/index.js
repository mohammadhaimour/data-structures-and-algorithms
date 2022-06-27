'use strict';
const an = require('./animal_shelter/animal_sheleter');

const animal = new an();

animal.enqueue('cat');
animal.enqueue('cat');
animal.enqueue('cat');
console.log('delete : ', animal.dequeue('cat'));
console.log('delete : ', animal.dequeue('cat'));
console.log('delete : ', animal.dequeue('cat'));
console.log('delete : ', animal.dequeue('cat'));

console.log('_____________________');
animal.enqueue('dog');
animal.enqueue('dog');
animal.enqueue('dog');
console.log('delete : ', animal.dequeue('dog'));
console.log('delete : ', animal.dequeue('dog'));
console.log('delete : ', animal.dequeue('dog'));
console.log('delete : ', animal.dequeue('dog'));


// // let cat2 = an1.enqueue('cat');

// // console.log(cat1);
// // console.log(cat2);
// console.log(an1.cat);


// console.log(an1.cat);

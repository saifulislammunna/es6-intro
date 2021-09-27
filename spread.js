const numbers = [23, 65, 99, 21, 34];
// console.log(numbers);
// console.log(...numbers);

// const max = Math.max(23, 99, 65);
// console.log(max);
const max = Math.max(23, 99, 65,21,34);
const maxInArray = Math.max(...numbers);
// console.log(max,  maxInArray);

// refernce
// const numbers2  = numbers;
//  numbers.push(55);
// console.log(numbers2);

// two dimensional array
const numbers2 = [ 22,...numbers,88];
numbers.push(55);
console.log(numbers);
console.log(numbers2);

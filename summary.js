// 88% const variable declare korbo
const hubby = 'Akbar the great';
// reassign korar khetre let use korba
let priyoPerson = 'koolsum Begum';
priyoPerson = 'Momotaj Begum';

// default parameter
function getName(first, last='Chowdhury'){
   return first + '' + last;
} 

//  template string

const myPeople =`My lovely person is are ${hubby} and his fullName is ${getName('Akbar')}. My name is ${priyoPerson}.`

console.log(myPeople);

// arrow function
const getName2 = (first, last) => first + '' + last;
const fiveTimes = x => x*5;
const bigArrowFunc = (x,y,z) => {
    const firstPart = x + y;
    const secondPart = y * z;
    const thirdPart = x/z;
    const result = (firstPart + secondPart)*thirdPart;
    return result;
}

//spraed operator 
const numbers = [2, 4, 67, 54];
const min = Math.min(...numbers) 
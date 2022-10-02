const numbers = [1, -5, 666, 2, 400, 11];

const arr = numbers.slice().sort((a,b)=> a-b);
const arr1 = numbers.slice().sort((a,b)=> b-a);

console.log(arr);
console.log(arr1);

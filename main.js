// for of massivlar uchun
// for in objectlar uchun

const arr = [1,2,3] 

const numbers = arr.slice()

numbers[1] = 'maruf'

console.log(arr);
console.log(numbers);

const liverpool = ['salah', 'mane']
const chelsea = ['palmer', 'silva']

const mixplayer = [...liverpool, ...chelsea]
console.log(mixplayer);
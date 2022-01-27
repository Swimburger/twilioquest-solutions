const number = Number(process.argv[2]);
let output = '';
if(number%3===0) output += 'Java';
if(number%5===0) output += 'Script';
if(output === '') output = number;

console.log(output);
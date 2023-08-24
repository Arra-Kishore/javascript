//q-1
let str="kishore\""
console.log(str.length)
//q-2 includes 

const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';
console.log(sentence.includes(word))
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
//q-3
let s="goodmorning"
console.log(s.startsWith("good"))
console.log(s.endsWith("mg"))
//q-4
console.log(s.toUpperCase())
//q-5
let str1="i am rich"
let amount=str1.slice("i am ".length )
console.log(amount)

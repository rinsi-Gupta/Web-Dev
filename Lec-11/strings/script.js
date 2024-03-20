// toUpperCase()
// toLowerCase()
// concat() -> +
// trim(), trimStart(), trimEnd()
// replace(), replaceAll()
// slice(), subString()

let str1 = '           Hello World!!';
let str2= 'Hello World!!            ';
let str3 = '           Hello World!!';

// console.log(str1.trimStart());
// console.log(str2.trimEnd() + 'abcde');
console.log(str3.trim());

console.log(str3.trim().replace('o', '0'));
// console.log(str3.replaceAll('!', '?'));

var str = 'This is some String';

console.log(str.slice(8,12))
console.log(str.substring(8,12));
console.log(str.slice(-6,-1))  //

var newStr = 'string';
console.log(newStr.slice(-6));
console.log(newStr.substring(-6, -3)) 

//in this we use backstrack to print hello world in next line
var word = `hello 
world`

console.log(word)


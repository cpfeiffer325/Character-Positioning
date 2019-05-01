function countLetters(input) {
var str = input.join("");

var letterCount = {};

for (var i = 0; i < str.length; i++) {
  if (!letterCount[str[i]]) {
    letterCount[str[i]] = 1;
    console.log(str[i]);
  } else if (letterCount[str[i]]) {
    letterCount[str[i]]++;
  }
}
return letterCount;
}

var myArg = process.argv.slice(2);

console.log(countLetters(myArg));
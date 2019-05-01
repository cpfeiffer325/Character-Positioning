function countLetters(input) {
var letterCount = {};
var str = input.join(" ");
console.log(str);

for (var i = 0; i < str.length; i++) {
  if (str[i] !== " ") {
    if (!letterCount[str[i]]) {
    letterCount[str[i]] = [i];
    } else {
      letterCount[str[i]].push(i);
    }
  }
}
return letterCount;
}

var myArg = process.argv.splice(2);

console.log(countLetters(myArg));
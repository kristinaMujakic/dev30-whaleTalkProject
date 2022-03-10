let input = "Life is as good as your mindset";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];

for (let inp of input) {
  if (inp === "e") {
    resultArray.push(inp);
  }
  if (inp === "u") {
    resultArray.push(inp);
  }
  for (let vow of vowels) {
    if (inp === vow) {
      resultArray.push(inp);
    }
  }
}

console.log(resultArray.join("").toUpperCase());

let numbers = [2, 3, 4, 5];

let product = numbers.reduce(function(acc, num) {
  return acc * num;
}, 1);
console.log("Product of all numbers is:", product);

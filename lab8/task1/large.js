function findLargest(a, b, c) {
  if (a >= b && a >= c) {
    console.log(a + " is the largest number");
  } 
  else if (b >= a && b >= c) {
    console.log(b + " is the largest number");
  } 
  else {
    console.log(c + " is the largest number");
  }
}

findLargest(10, 25, 7);

let counter = 0;
let numbers = [1, -2, 3, -1, 1, -4];
console.log("Triplets with sum ZERO :");
for (i = 0; i < numbers.length - 2; i++) {
  for (j = i + 1; j < numbers.length - 1; j++) {
    for (k = j + 1; k < numbers.length; k++) {
      sum = numbers[i] + numbers[j] + numbers[k];
      sum === 0 ? counter++ : console.log("sum not equal to zero");
    }
  }
}
console.log("number of distinct triplets is " + counter);
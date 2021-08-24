let doubleDigitNumber = [];
// Adds numbers that repeated twice to doubleDigitNumber array
for (i = 1; i < 100; i++) {
    if (i % 11 == 0)
        doubleDigitNumber.push(i);
}
console.log("Double digit numbers : " + doubleDigitNumber);
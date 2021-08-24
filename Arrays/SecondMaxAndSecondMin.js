var number = [];
for (i = 1; i <= 10; i++) {
  let randomValue = Math.floor(Math.random() * 101) + 100;
  number.push(randomValue);
}
console.log(number);
let maximum = number[0];
let minimum = number[0];
let secondMax = 0 , secondMin = 0;
for(let i=0 ; i<number.length ; i++){
    if(number[i] > maximum){
        secondMax = maximum;
        maximum = number[i];
    }
    else if(number[i] < minimum){
        secondMin = minimum;
        minimum = number[i];
    }
}
console.log("Second Maximum : " + secondMax);
console.log("Second Minimum : " + secondMin);
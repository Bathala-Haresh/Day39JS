var number = [];
for (i = 1; i <= 10; i++) {
  let randomValue = Math.floor(Math.random() * 101) + 100;
  number.push(randomValue);
}
console.log("Numbers before sorting  "+number);
for(let i= 0; i<number.length ;i++){
    for(let j=0 ; j<number.length-1 ; j++){
        if(number[j] > number[j+1]){
            let temp = number[j];
            number[j] = number[j+1];
            number[j+1] = temp;
        }
    }
}
console.log("Numbers after sorting  "+number);
console.log("Second Max : " + number[8] + " Second Minimum : " + number[1]);
var num = [];

for (var i = 0; i < 100; i++) {
  num[i] = i + 1;

  
  // multipli di 5 e 3   
  if (num[i] % 5 == 0 && num[i] % 3 == 0) {
    console.log(num[i] = "FizzBuzz");
  }
  // multipli di 5 
  else if (num[i] % 5 == 0) {
    console.log(num[i] = "Buzz");
  }
  // multipli di 3
  else if (num[i] % 3 == 0 ) {
    console.log(num[i] = "Fizz");
  } 
  // stampo tutti gli altri 
  else {
    console.log(num[i]);
  }
}
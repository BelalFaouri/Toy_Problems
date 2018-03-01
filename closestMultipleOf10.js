 // Given a number return the closest number to it that is divisible by 10.
 // Example :
	// 22 ===> 20
	// 25 ===> 30
	// 37 ===> 40
 function closestMultipleOf10(num) {
 	//your code is here
  for (var i = 1; i < 10; i++) {
    if(num % 10 === 0 || (num + i) % 10 === 0 ){
      return num + i;
    }else if ((num - i) % 10 === 0 ) {
      return num - i;
    }
  }
 }

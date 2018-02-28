	// Given a string, swap the case for each of the letters.
	// IbrAHiM --> iBRahIm
	// ToYPRoblEm --> tOyprOBLeM
	function swap(input){
		//your code is here
		var newStr='';

		for (var i = 0; i < input.length; i++) {
			if (input[i] === input[i].toUpperCase()) {
				newStr+=input[i].toLowerCase();
			} else if (input[i] === input[i].toLowerCase()){
				newStr+=input[i].toUpperCase();

			}
		}
		return newStr;
	}

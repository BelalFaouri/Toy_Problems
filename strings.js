// Write a function called characPosit, when provided with a letter, return its position in the alphabet.
// 	Input :: "a"
// 	Ouput :: "Position of alphabet: 1"
	function characPosit(character){
		//your code is here
		var alph=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

		for (var i = 0; i < alph.length; i++) {
			if(alph[i]===character){
				return 'Position of alphabet: ' + (i+1);
			}
		}
	}

// Write a function called repeatStr which repeats the given
// string string exactly n times.
// repeatStr("hello",4) ==> 'hellohellohellohello'

	function repeatStr (n, s) {
		//your code is here
		var str='';
		for (var i = 0; i < s; i++) {
			str+=n;
		}
			return str;
	}

// This time no story, no theory. The examples below show you what do you need, write a function to accomplich that
// Examples:
// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"


    function accum(input){
        //your code is here
        var str='';

        for (var i = 0; i < input.length; i++) {
          if(i === input.length - 1){
              str+=input[i].toUpperCase()+(input[i].repeat(i)).toLowerCase();
          } else{
              str+=input[i].toUpperCase()+(input[i].repeat(i)).toLowerCase() + '-';
          }

        }
        return str;
    }

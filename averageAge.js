// Write a function called  averageAge that accpets an array of objects and return the average ages for the people who are between 18 and 50

function each(coll, func) {
    if (Array.isArray(coll)) {
        for (var i = 0; i < coll.length; i++) {
            func(coll[i], i);
        }
    }
    else {
        for (var key in coll) {
            func(coll[key], key);
        }
    }
}

 var people = [
       {name: {first: 'Ahmad', middle: 'B.', last: 'AlAhmad'}, age: 85},
       {name: {first: 'Amer', last: 'MHD'}, age: 43},
       {name: {first: 'Aya', last: 'Sultan'}, age: 36},
       {name: {first: 'Hadeel', middle: 'E.', last: 'Lami'}, age: 44},
       {name: {first: 'Hadeel', middle: 'E.', last: 'Lami'}, age: 54},
       {name: {first: 'Lina', last: 'MHD'}, age: 14} ,
       {name: {first: 'Obada', last: 'Eddin'}, age: 24}
 ];
 function averageAge(people) {
        var ageSum=0;
        var ageNo=0;
        each(people,function(object,i){
          if(object.age > 18 && object.age < 50){
            ageSum+=object.age;
            ageNo+=1
          }
        })
        return ageSum/ageNo
 }

 averageAge(people); // 43+36+44+24 = 36.74

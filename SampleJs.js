console.log("Hello");

var a ="learn Hard";

//var intake = prompt(a);

document.write("Hello From Java Script " +a);


var person={ 
    first_name:'Aniket',
    last_name:'Bunny',
    age:33,city:'Paris',
    country:'France',
    university:'Paris University'
};


var Studnet ={
    student1:{
        name:'Aniket',
        age:33
    },
    student2:{
        name:'Bunny',
        age:23
    },
    student3:{
        name:'Maggi',
        age:33
    },
    student4:{
        name:'banna',
        age:55
    },
    student5:{
        name:'Maggi-Bom',
        age:45
    },
    student6:{
        name:'banna-mom',
        age:55
    }
};

var b=1;

// console.log(Studnet['student' + b ]);
// b++;
// console.log(Studnet['student' + b]);
// b++;
// console.log(Studnet['student' + b]);
// b++;
// console.log(Studnet['student' + b]);
// b++;
// console.log(Studnet['student' + b]);

// array in java script 

var nameCity ;
var school=["aniket",1,46,33,8,32,66,"Bunny","Mike","Marker","Goom"];

school.push("Hello New");
console.log(school);

school[6]="Sixth";
console.log(school);

var f=school.toString();  // arry to string to string 

var g="aniket,Bunny,Mike,Marker,Goom,,,,,,,,,,,,,,,,,,,,,Hello New,Sixth"

var h=g.split(','); // string into array  spilt 

// join two array  //shit and unshit , push,pop,length

var k=h.join(school);

var hk=school.join('*');


var NewSchool =school.slice(3);

console.log(NewSchool.sort());
console.log(NewSchool.reverse());

//sorting in array


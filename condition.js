console.log("Condtion Apply Logic");

var a=5;
var b=10;
var c=300;
var d=12;
// simple if...else statment 
if(a > b){
    console.log(a);
}else{
    console.log(b);
}

//ternary operator

console.log( a>b ?'Aniket':'bunny');
console.log(c>d ?'yahoo':'google');

// switch statement 

switch(a){
    case 4:
    console.log('Yes it is 4');
    break;
    case 3:
    console.log('Yes it is 3');
    break;
    case 2:
    console.log('Yes it is 2');
    break;
    case 5:
    console.log('Yes it is 5');
    break;
    default:
    console.log('No valid case found');
}

// Loops Do while loop

// while loop dose not check conditon true
var person ={
name:'aniket',
name1:'Bunny',
name2:'Bun-Bun',
name3:'Mascco',
name4:'Buunty'
};

var a = 1;

while ( a < 5)
{
    console.log (person['name'+ a] );
    a++;
}

// var b=1;
// while(b<10)
// {
//     console.log(b);
//     b++;
// }


// do -while loop check condition true  ( check conditon before )

// var c=1;

// do{
//     console.log(c++);
// }
// while ( c < 5);

// For Loops 

for(var k=10; k>=1; k--)
{
    console.log(k);
}
// for in loop 
for(a in person)
{
    console.log (person[a] );
}
debugger
var student=['abc','pqe','xyz','hell','Mike']
for(z = 0; z < student.length; z++)
{
    console.log(student[z]);
    console.log(typeof z);
}

for(x of student)
{
    console.log(x);
}
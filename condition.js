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
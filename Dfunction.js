console.log("Function Implementation");

function calculation(num1,num2){
console.log(" The addition is " +(num1+num2) );
}




var data=[3,4,6,33,77,88];
total=0;
var bigtotal;
for(var i = 0; i < data.length; i++)
{
   // debugger;
    bigtotal=total +=data[i];
    console.log(bigtotal);

}




var myObj=[3,4,6,33,77,88];
//debugger;
if(typeof myObj == "Array" )
{
    console.log("Yes it is array");
};
if(typeof myObj == "object" )
{
    console.log("Yes it is Object");
};

console.log(myObj);

// Excersie No 1

console.log("abc");
console .log( "Exercises");
//debugger;
var days = ["Sunday","Monday","Tuesday","Wednesday", "Thrusday","Friday","Saturday"];
//debugger;
var now= new Date();
var day= days[now.getDay()];
console.log(" Today is :" +day);
//consol.log(" Current Time is : ")

var hours = now.getHours();
var minutes = now.getMinutes();
var sec =  now.getSeconds();

console.log( " Current Time is " +hours +"AM:" +minutes +
":" +sec );


// Leap year 
console.log("Leap  year") ;

//debugger;
var now = new Date();
var year = now.getFullYear()
console.log(year);

if(year % 4 == 0 )
{
console.log( "Yes Leap Year")
}else
{
console.log("No it is not Leap Year");
}

// reversers number 

function byChoice(){

    console.log("Reverse Number");
   var number = window.prompt(" Enter Number") ;
    var sum= 0;
    var rem;
while { number > 0 }
{
rem = number % 10;
sum = sum * 10 + rem;
number = number / 10;
}
alert( " Reverse Number is " +sum);
}

byChoice();
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
debugger;
if(typeof myObj == "Array" )
{
    console.log("Yes it is array");
};
if(typeof myObj == "object" )
{
    console.log("Yes it is Object");
};

console.log(myObj);
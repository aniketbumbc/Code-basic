console.log("Function Implementation");
function evenNumber(Num1) {

    if (Num1 % 2 == 0) {
        console.log("Even Number");
    } else {
        console.log("Odd Number");
    }

}
evenNumber(577);



// sorting 3 numbers 


// function sortNumber(num1,num2,num3)
// {
//         while(num3 > num1 && num2)
//         {
//             alert(num1 + num2  + num3);
//         }

// }

//sortNumber(10,20,30);


var x= 0;
var y=-1;
var z= 4;
if (x>y && x>z)
{
        if (y>z)
        {
            console.log(x + ", " + y + ", " +z);
        }
        else
        {
            console.log(x + ", " + z + ", " +y);
        }
}
else if (y>x && y >z)
{
        if (x>z)
        {
             console.log(y + ", " + x + ", " +z);
        }
        else
        {
             console.log(y + ", " + z + ", " +x);
        }
}
else if (z>x && z>y)
{
        if (x>y)
        {
            console.log(z + ", " + x + ", " +y);
        }
        else
        {
            console.log(z + ", " + y + ", " +x);
        }
} 
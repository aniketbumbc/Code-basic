console.log("Hello 13 March");

function Facto(num) {
    var result = num;
    if (num === 0 || num === 1)
        return 1;
    while (num > 1) {
        num--;
        result *= num;
    }
    console.log(result);
}
Facto(6);


console.log("Nesated For Loop")

function Looping() {

    for (var i = 1; i <= 5; i++) {
        for (var j = 1; j <= i; j++) {
            console.log(i * j);
        }
    }
    console.log(i * j);
}

Looping();

function NestedLoop(){
    for(var i= 1; i<=2; i++)
    {
        for(var j=1 ; j<=2; j++)
        {
            document.write("Hello Nested Loop </br>");
        }
    }
}

NestedLoop();

function palindrome(str){
    var str,revs="" ;
    console.log(" Orignal String   "  +str);
    for(var i=str.length-1; i>=0; i--)
    {
        revs +=str[i];
    }
   if(revs == str)
   {
       console.log("This is Palindrome");
   }else{
    console.log("This is Not Palindrome");
   }
}

palindrome("repaper");
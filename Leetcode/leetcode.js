console.log("welcome to leetcode");

//Palindrome string 


function palindrome(str){
    var len = str.length;
    for(var i=0; i< Math.floor(len/2);i++)
    {
        if(str[i] !== str[len-1-i])
        
        console.log("It is not Palindrome");
    }
    console.log("It is  Palindrome");
}


//palindrome("121");


function Numplaindrome(num){
    var rem , rev=0 ;
    while(num > 0)
    {
        rem = num % 10;    
        num = num / 10;
        sum = sum * 10 +rem

    }
    
        
    console.log(rev);
}


Numplaindrome(1234);
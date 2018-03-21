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



// angular for each 

// var obj = {name:"Aniket",age:25,city:"Baltimore"}
// angular.forEach(obj,function(value,key){
// console.log(key+ ' ; ' + value);
// });


/* var values = {name: 'misko', gender: 'male' ,city:"London"};

angular.forEach(values, function(value, key) {
  console.log(key + ': ' + value);
});
 */
/*  var values = {name: 'misko', gender: 'male'};
 var log = [];
 angular.forEach(values, function(value, key) {
  console.log(key + ': ' + value);
 }); */

//  values = [
//     {
//        "Name" : "Thomas",
//        "Password" : "thomasTheKing"
//     },
//     {
//        "Name" : "Linda",
//        "Password" : "lindatheQueen"
//     },
//     {
//     "Name":"Aniket",
//     "Password" :"Yahooo56",
//     "Email":"dhdj@gmail.com"
//     }
//     ];
    
//     angular.forEach(values, function(value, key){
//     angular.forEach(value,function (v1,k1){
//     console.log(k1+ ' : ' + v1); 
//     });
//      }); 
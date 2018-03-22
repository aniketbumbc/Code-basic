console.log("Some play with Array");

// var Numbersqq=[12,15,48,68,3,54,10,55];

// console.log(Numbers);
// console.log(typeof(Numbers));
// var position = Numbers.indexOf(68);
// console.log(position);
// var reverseArray = Numbers.reverse();
// console.log(reverseArray);

function roateteArray(Numbers,K){

    console.log(Numbers);
    console.log(K);
    var temp, pre;
    for(var i =0; i<K ;i ++)
    {
        pre=Numbers[Numbers.length-1];
        for(var j=0;j<Numbers.length;j++)
        {
            temp=Numbers[j];
            Numbers[j]=pre;
          return   pre=temp;
        }
    }
}

var Numbers=[12,15,48,68,3,54,10,55]
roateteArray(Numbers,5);
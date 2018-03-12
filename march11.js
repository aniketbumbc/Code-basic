console.log("Hello");

function longString(str) {
    var length = str.length;
    var spltString = str.split(" ");
    console.log(spltString);
    var revSpltString =  spltString.reverse();
   var revToString= revSpltString.join(" ");
   //var rej=revToString.join(" ");
    console.log(revToString);
     var logestWord = 0;
    for (var i = 0; i < spltString.length; i++) {
        if (spltString[i].length > logestWord) {
            logestWord = spltString[i].length;
            logestWordName = spltString[i];
        }
    }
    console.log(logestWord + " " + " Logest String is " + logestWordName);
}

longString("The quick brown fox jumped over the lazy dog");
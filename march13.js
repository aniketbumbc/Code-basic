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
console.log("Function Coming Soon");


//function no parameter 
function myFun() {
    console.log("Welcome to Function");
}
myFun();

// function with parameter 
function myFunpara(a) {
    console.log(a);
}
myFunpara("Hello from variable");


//multiple argument function

function additon(a, b) {
    return a + b;
}
console.log(additon(12, 33));

//arry function

var person = ['aniket', 'abhi', 'mike', 'king'];
function addArray(personadd, addNew) {
    personadd.push(addNew);
    console.log(personadd);
    
    return "Adding New Array";
}

addArray(person, "New item");

//gobal and local variable scope 
// create a module and register controller 


// create module with name myModule
var myApp = angular.module("myModule",[]);  //myApp module object

// var myController = function($scope){
//     $scope.message="Hello Angular World";
// };


// // to register controller with module
// myApp.controller("myController", myController);  //(name of controller ,name controller function)


// create  controller 
myApp.controller("myController", function($scope){  // create controller function  and register with module 
    $scope.message = "Hello Angular World";
   
//debugger;
    var employee = {
        firstName: "aniekt",
        lastName: "KBD",
        gender: "Male"
    };
    $scope.employee = employee;
});


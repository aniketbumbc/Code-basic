console.log("Let Code Started");

// var arraySum=function(nums,target){

//     //var nums=[10,20,11,5];

//     var target = nums[0]+nums[1];

//     console.log(target);

// }

// arraySum([2, 7, 11, 15],9);


// function twoSums(nums,target){
// var result=[];
// nums.forEach(function(num ,i){
//     var diff =target-num;
//     var k=nums.indexOf(diff)
//     if(k>-1 && k!==i){
//         result[0]=i
//         result[1]=k
//         return true;
//     }
// })
// console.log(result);

// }

// twoSums([2, 7, 11, 15],9);


// var reverseInt=function(num){
//     var rev = 0;
// while(num > 0)
// {
//     var rem = num % 10;
//     rev = rev * 10 + rem;
//     num = parseInt(num /10);
// }
// console.log (rev);
// }
// reverseInt(456);

// // foreach 

 var names =['aniker','Banana' ,'Milke'];

// names.forEach(function(ele){
//     console.log(ele);
    
// });

function ShowResults(value,index,ar){
    console.log(" value " +value +" Index " +index + " ar " + ar);
}

names.forEach(ShowResults);
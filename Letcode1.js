console.log("Let Code Started");

// var arraySum=function(nums,target){

//     //var nums=[10,20,11,5];

//     var target = nums[0]+nums[1];

//     console.log(target);

// }

// arraySum([2, 7, 11, 15],9);


function twoSums(nums,target){
var result=[];
nums.forEach(function(num ,i){
    var diff =target-num;
    var k=nums.indexOf(diff)
    if(k>-1 && k!==i){
        result[0]=i
        result[1]=k
        return true;
    }
})
return result;

}

twoSums([2, 7, 11, 15],9);
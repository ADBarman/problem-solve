var numbers=[45, 65, 78, 12, 3, 54, 65];
var sum = 0;
for(var i=0; i<numbers.length;i++){
	var element=numbers[i];
	sum = sum + element;
}
console.log("total value of the numbers is: ", sum);
//-------------------------------------------------------

function getArraySum(numbers){
	var sum = 0;
	for(var i=0; i<numbers.length;i++){
	var element=numbers[i];
	sum = sum + element;
	}
	return sum;
}
var numbers=[45, 65, 78, 12, 3, 54, 65];
var result = getArraySum(numbers);
console.log("total value of the numbers is: ", result);
//------------------------------------------------
function getArraySum(numbers){
	var sum = 0;
	for(var i=0; i<numbers.length;i++){
	var element=numbers[i];
	sum = sum + element;
	}
	return sum;
}
var total = getArraySum([43,56,65,78,86]);
console.log("total value of the numbers is: ", total);
var business = 450;
var minister = 350;
var sochib = 250;
if (business>minister){
	if(business>sochib){
	console.log("business is bigger");
	}
	else {
		console.log("sochib is bigger");
	}
}
else {
	if (minister>sochib){
	console.log("Minister is bigger");
	}
	else {
	console.log("sochib is bigger");
	}	
}
//----------------------------------------------
var business = 450;
var minister = 350;
var sochib = 250;
var max = Math.max(business, minister, sochib);
console.log(max);
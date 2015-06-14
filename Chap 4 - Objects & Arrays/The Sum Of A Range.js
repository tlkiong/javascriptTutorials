// var range = function (start, end) {
// 	var arrayOfNumbers = [];
// 	for(var i = start;i<=end;i++){
// 		arrayOfNumbers.push(i);
// 	}
// 	return arrayOfNumbers;
// }

var range = function (start, end, stepValue) {
	var arrayOfNumbers = [];
	if(stepValue==undefined){
		for(var i = start;i<=end;i++){
			arrayOfNumbers.push(i);
		}
	} else {
		for(var i = start;i<=end;i+=stepValue){
			arrayOfNumbers.push(i);
		}
	}
	
	return arrayOfNumbers;
}

console.log(range(1,10));

var sum = function (arrayOfNumbers) {
	var value = 0;
	for(var i = 0, j=arrayOfNumbers.length;i<j;i++){
		value += arrayOfNumbers[i];
	}
	return value;
}

console.log(sum(range(1,10)));
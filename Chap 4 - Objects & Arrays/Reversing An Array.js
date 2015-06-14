var array = [ 1,2,3,4,5,6,7,8,9,10 ];

var reverseArray = function (arrayToBeReversed){
	var newArray = [];
	for (var i=arrayToBeReversed.length;i>=0;i--) {
		newArray.push(arrayToBeReversed[i]);
	}
	return newArray;
}

console.log(reverseArray(array));

var reverseArrayInPlace = function(arrayToBeReversed){
	var counter = 0;
	var temp;
	for(var i = arrayToBeReversed.length-1; i>counter;i--){
		temp = arrayToBeReversed[counter];
		arrayToBeReversed[counter] = arrayToBeReversed[i];
		arrayToBeReversed[i]=temp;
		counter++;
	}
	return arrayToBeReversed;
}

console.log(reverseArrayInPlace(array));
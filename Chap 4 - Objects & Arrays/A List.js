var arrayToList = function(array) {
	var arrayLength = array.length;
	var object = {};
	for(var i = arrayLength-1; i>=0;i--){
		if(i == arrayLength-1) {
			object = {
				value: array[i],
				rest: null
			}
		} else if (i<arrayLength){
			object = {
				value:array[i],
				rest:object
			}
		}
	}

	return object;
}

console.log(arrayToList([1,2,3]));
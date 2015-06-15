var arrays = [1,2,3];

var arrayToList = function(array) {
	var arrayLength = array.length;
	var object = {};
	for(var i = arrayLength-1; i>=0;i--){
		if(i == arrayLength-1) {
			object = {
				val: array[i],
				rest: null
			}
		} else if (i<arrayLength){
			object = {
				val:array[i],
				rest:object
			}
		}
	}

	return object;
}

console.log(arrayToList(arrays));

var listToArray = function(list){
	var array = [];
	for(var key in list){
		if(list.hasOwnProperty(key)){
			//key + list[key]
			array.push(list[key].val);
			while(list[key].rest!=null){// will be infinite loop since never go to the inside one
				array.push(list[key].val);
			}
		}
	}
	return array;
}

console.log(listToArray(arrayToList(arrays)));
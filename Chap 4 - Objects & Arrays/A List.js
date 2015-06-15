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
	 for (var node = list; node; node = node.rest) {
	 	array.push(node.val);
	 	console.log("node"+node);
	 }
	return array;
}

console.log(listToArray(arrayToList(arrays)));

var prepend = function (element, list){
	return {val:element,rest:list};
}

console.log(prepend(30,arrayToList(arrays)));

var nth = function(number, list){
	var element = undefined;
	var counter = 0;
	for(var node=list; node; node = node.rest){
		console.log("node.val: "+node.val);
		if(counter==number){
			element = node.val;
		}
		counter++
	}
	return element;
}

console.log("\t return is: "+nth(4,arrayToList(arrays)));
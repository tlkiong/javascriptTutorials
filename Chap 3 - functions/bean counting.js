"string".charAt(5); // result is "g"

var countBs = function(word) {
	var countB = 0;
	for(var i = 0, j=word.length; i<j;i++){
		var character = word.charAt(i);
		if(character=="B"){
			countB++;
		}
	}
	return countB;
}

console.log(countBs("aBassB"));

var countChar = function(word, charToCount){
	var count = 0;
	for(var i = 0, j=word.length; i<j;i++){
		var character = word.charAt(i);
		if(character==charToCount){
			count++;
		}
	}
	return count;
}

console.log(countChar("wooodoooooodddas","d"));
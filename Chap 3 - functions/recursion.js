var isEven = function (number){
	var digit = Number(number);
	if(digit>=0){
		if(digit==0) {
			return true;
		} else if (digit==1){
			return false;
		} else {
			return isEven(number - 2);
		}
	} else {
		return "number must be > 0";
	}
}

console.log(isEven(50));
var array = new Array(1,2,3,4,5,6,7);
var arrayCopy = new Array();
function CopiarArray(){
	
	for (var i=0; i<array.length; i++) {
		var currentVal = array[i];
		arrayCopy.push(currentVal+1);
	}
	
	return arrayCopy;
}
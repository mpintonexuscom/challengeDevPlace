var array = new Array(5,1,7,2,4,3);
var auxVal;
function OrderArray(){
	
	// oredeno por burbujeo
    for (i=0; i<(array.length-1); i++) {
		for (j=0; j<(array.length-i); j++) {
			if (array[j] > array[j+1]){
				 auxVal = array[j];
				 array[j] = array[j+1];
				 array[j+1] = auxVal;
			}
		}
	}
 
    return array
}
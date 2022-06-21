function CantidadMayusculas(valueText){
	var count = 0;
	
	for (var i = 0; i < valueText.length; i++) {
		var currentChar = valueText.charAt(i);
		if (currentChar != " ") {
			if (currentChar === currentChar.toUpperCase()) {
				count++;
			}
		}
	}
	
	return count;
}
/* 
Intermediate Algorithm Scripting: Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

// SOLUTION 1 w/o regex
function spinalCase(str) {
	let newStr = str.replaceAll(' ', '-').replaceAll('_', '-');
	let arr = newStr.split('');
	let newArr = [];

	for (let i = 0; i < arr.length; i++) {
		if (i == 0) {
			newArr.push(arr[i].toLowerCase());
		} else if (i != 0) {
			if (arr[i] == arr[i].toUpperCase() && arr[i] != '-') {
				newArr.push('-');
				newArr.push(arr[i].toLowerCase());
			} else {
				newArr.push(arr[i].toLowerCase());
			}
		}
	}

	prev = newArr[0];
	cur = newArr[1];

	// removes one '-' if there are two in a row
	for (let i = 0; i < newArr.length; i++) {
		if (cur == '-' && prev == '-') {
			newArr[i] = '';
		}
		cur = newArr[i + 1];
		prev = newArr[i];
	}

	return newArr.join('');
}

// SOLUTION 2
function spinalCase(str) {
	// Create a variable for the white space and underscores.
	var regex = /\s+|_+/g;

	// Replace low-upper case to low/space/uppercase
	str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

	// Replace space and underscore with -
	return str.replace(regex, '-').toLowerCase();
}

// SOLUTION 3
function spinalCase(str) {
	// "It's such a fine line between stupid, and clever."
	// --David St. Hubbins

	return str
		.split(/\s|_|(?=[A-Z])/)
		.join('-')
		.toLowerCase();
}

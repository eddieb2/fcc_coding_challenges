/* 
Intermediate Algorithm Scripting: Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
	// sets the alphabet
	let alphabet = 'abcdefghijklmnopqrstuvwxyz';
	// finds the str's first letter in the alphabet -> gets us our starting point
	let alphabetLocation = alphabet.search(str[0]);
	let count = 0;

	// loop x amount of times, based on the length of the string
	// pointer1 on the alphabet @ str[0]'s location
	// pointer2 on the str's first char
	// alphabet = [a,b,c,d,e,f,g,...]
	// pointer 1         ^
	// str      = [d,e,g]
	// pointer 2   ^
	// increment each pointer by one
	// if the pointers arent the same, return alphabet's location (missing char)
	for (let i = 0; count < str.length; i++) {
		if (alphabet[alphabetLocation] != str[i]) {
			return alphabet[alphabetLocation];
		}

		count++;
		alphabetLocation++;
	}
	return undefined;
}

fearNotLetter('cdfg');

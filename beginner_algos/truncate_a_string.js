// Basic Algorithm Scripting: Truncate a String
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {
	// find the chars that are over the max len
	// use replace to replace chars with .

	let charsToReplace = str.substring(num);
	let newStr = str.replace(charsToReplace, '...');

	if (str.length <= num) {
		return str;
	} else {
		return newStr;
	}
}

truncateString('A-tisket a-tasket A green and yellow basket', 8);

/* 
truncateString("A-tisket a-tasket A green and yellow basket", 8) should return "A-tisket...".
Passed
truncateString("Peter Piper picked a peck of pickled peppers", 11) should return "Peter Piper...".
Passed
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return "A-tisket a-tasket A green and yellow basket".
Passed
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return "A-tisket a-tasket A green and yellow basket".
Passed
truncateString("A-", 1) should return "A...".
Passed
truncateString("Absolutely Longer", 2) should return "Ab...".
*/

/* 
Intermediate Algorithm Scripting: Search and ReplacePassed
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note
Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

*/
function myReplace(str, before, after) {
	let newAfter;

	if (before[0] == before[0].toUpperCase()) {
		// if before is capitalized, capitalize after
		newAfter = after.charAt(0).toUpperCase() + after.slice(1);
	} else if (before[0] == before[0].toLowerCase()) {
		// if before is lowercase, lowercase after
		newAfter = after.charAt(0).toLowerCase() + after.slice(1);
	}

	return str.replace(before, newAfter);
}

myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting');

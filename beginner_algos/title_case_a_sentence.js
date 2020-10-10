/* 
Basic Algorithm Scripting: Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

/* 
-----------
 SUDO CODE
-----------
split each word from the string into an array
declare a new word array

loop through the arr of words from the string
- extract the first letter and capitalize it
- extract the remaining lets from the word and change them to lowercase
- concat the capitalized letter with the remaining letters 
- push the combined word into the array

return the joined version of the new word array
*/

function titleCase(str) {
	let arr = str.split(' ');
	let newWord = [];

	arr.forEach((word) => {
		let cap = word[0].toUpperCase();
		let remaining = word.slice(1).toLowerCase();

		newWord.push(cap + remaining);
	});

	return newWord.join(' ');
}

titleCase("I'm a little tea pot");

/* 
titleCase("I'm a little tea pot") should return a string.
Passed
titleCase("I'm a little tea pot") should return I'm A Little Tea Pot.
Passed
titleCase("sHoRt AnD sToUt") should return Short And Stout.
Passed
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return Here Is My Handle Here Is My Spout.
*/

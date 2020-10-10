/* 
Intermediate Algorithm Scripting: Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
	// split str into an array
	let arr = str.split('');

	// FIND CONSONANT CLUSTER
	const findConsCluster = (arr) => {
		let consCluster = [];

		for (let i = 0; i < arr.length; i++) {
			// find a vowel, break
			if (arr[i] == 'a' || arr[i] == 'e' || arr[i] == 'i' || arr[i] == 'o' || arr[i] == 'u') {
				break;
			} else {
				// push cons to arr
				consCluster.push(arr[i]);
			}
		}
		return consCluster;
	};

	// word begins with a vowel ? add way to the end of the str array, join, and return
	if (arr[0] == 'a' || arr[0] == 'e' || arr[0] == 'i' || arr[0] == 'o' || arr[0] == 'u') {
		let vowelEnding = ['w', 'a', 'y'];

		vowelEnding.forEach((letter) => {
			arr.push(letter);
		});

		return arr.join('');
	} else {
		let ending = ['a', 'y'];
		// find the consCluster
		let consCluster = findConsCluster(arr);
		// removed the cons cluster from the original array
		let remaining = arr.slice(consCluster.length);

		// add each letter from the cons cluster to the end of the remaining letters
		consCluster.forEach((letter) => {
			remaining.push(letter);
		});

		// add ay to the end of the original array after the cons cluster
		ending.forEach((letter) => {
			remaining.push(letter);
		});

		return remaining.join('');
	}
}

translatePigLatin('glove');
// translatePigLatin("algorithm")

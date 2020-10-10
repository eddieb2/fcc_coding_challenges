/* 
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

function pairElement(str) {
	let dna = [];
	let pairs = [
		['A', 'T'],
		['T', 'A'],
		['C', 'G'],
		['G', 'C'],
	];

	for (let i = 0; i < str.length; i++) {
		if (str[i] == 'A') {
			dna.push(pairs[0]);
		} else if (str[i] == 'T') {
			dna.push(pairs[1]);
		} else if (str[i] == 'C') {
			dna.push(pairs[2]);
		} else if (str[i] == 'G') {
			dna.push(pairs[3]);
		}
	}
	return dna;
}

console.log(pairElement('GCG'));

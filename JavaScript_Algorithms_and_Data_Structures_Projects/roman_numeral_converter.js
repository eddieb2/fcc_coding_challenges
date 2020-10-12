/* 
JavaScript Algorithms and Data Structures Projects: Roman Numeral ConverterPassed
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
 */

/** Number to Roman Numeral Converter
 *  - Converts a whole number to a Roman Numeral (up to 9999)
 *
 * @param {Number} num
 */

function convertToRoman(num) {
	const hash = {
		1: 'I',
		2: 'II',
		3: 'III',
		4: 'IV',
		5: 'V',
		6: 'VI',
		7: 'VII',
		8: 'VIII',
		9: 'IX',
		10: 'X',
		20: 'XX',
		30: 'XXX',
		40: 'XL',
		50: 'L',
		60: 'LX',
		70: 'LXX',
		80: 'LXXX',
		90: 'XC',
		100: 'C',
		200: 'CC',
		300: 'CCC',
		400: 'CD',
		500: 'D',
		600: 'DC',
		700: 'DCC',
		800: 'DCCC',
		900: 'CM',
		1000: 'M',
	};

	let numOfDigits = num.toString().length;
	let numStr = num.toString();

	if (num < 0 || num % 1 !== 0) {
		throw new Error('Enter a positive whole number.');
	} else if (num > 9999) {
		throw new Error('Number out of range.');
	} else if (num in hash) {
		return hash[num];
	} else {
		if (numOfDigits === 2) {
			// 10th place
			// convert to string so we can access each digit
			// 1st digit - add 0 && 2nd digit remains the same
			let firstDigit = numStr[0] + 0;
			let secondDigit = numStr[1];

			return hash[firstDigit] + hash[secondDigit];
		} else if (numOfDigits === 3) {
			// 100th place
			let firstDigit = numStr[0] + 0 + 0;
			let secondDigit = numStr[1] + 0;
			let thirdDigit = numStr[2];

			if (!parseInt(secondDigit)) {
				return hash[firstDigit] + hash[thirdDigit];
			} else {
				return hash[firstDigit] + hash[secondDigit] + hash[thirdDigit];
			}
		} else if (numOfDigits === 4) {
			// 1000th place
			let firstDigit = hash['1000'].repeat(numStr[0]);
			let secondDigit = numStr[1] + 0 + 0;
			let thirdDigit = numStr[2] + 0;
			let fourthDigit = numStr[3];

			if (!parseInt(secondDigit) && !parseInt(thirdDigit)) {
				return firstDigit + hash[fourthDigit];
			} else if (!parseInt(secondDigit)) {
				return firstDigit + hash[thirdDigit] + hash[fourthDigit];
			}

			return firstDigit + hash[secondDigit] + hash[thirdDigit] + hash[fourthDigit];
		}
	}
}

// convertToRoman(1004);
// convertToRoman(1023);
convertToRoman(9999);

/* 
Basic Algorithm Scripting: Falsy Bouncer
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.
*/

// Solution 1
// O(n)
function bouncer1(arr) {
	let newArr = [];

	for (let i = 0; i < arr.length; i++) {
		let bool = Boolean(arr[i]);

		if (bool != false) {
			newArr.push(arr[i]);
		}
	}

	return newArr;
}

bouncer1([7, 'ate', '', false, 9]);

// Solution 2
// SIMPLEST SOLUTION O(n)
function bouncer(arr) {
	return arr.filter(Boolean);
}

bouncer2([7, 'ate', '', false, 9]);

// Solution 3
// O(n)
function bouncer(arr) {
	let newArr = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i]) {
			newArr.push(arr[i]);
		}
	}

	return newArr;
}

bouncer3([7, 'ate', '', false, 9]);

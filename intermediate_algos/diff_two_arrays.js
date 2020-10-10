/* 
Intermediate Algorithm Scripting: Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note
You can return the array with its elements in any order.
*/

// Solution 1
function diffArray(arr1, arr2) {
	let compare = {};
	let differences = [];

	if (arr1.length === 0 && arr2.length !== 0) {
		return arr2;
	} else if (arr2.length === 0 && arr1.lenght !== 0) {
		return arr1;
	} else if (arr1.length === 0 && arr2.length === 0) {
		return [];
	}

	// combine arr1 and arr2
	let newArr = [...arr1, ...arr2];
	// loop through new arr
	// add each value to the hash w/ count && index
	for (let i = 0; i < newArr.length; i++) {
		// if not in compare add
		if (!(newArr[i] in compare)) {
			// add value and index to hash, key == value
			compare[newArr[i]] = [1, i];
		} else if (newArr[i] in compare) {
			// increment count by one
			compare[newArr[i]][0] += 1;
		}
	}

	// if the value at index 0 has a count of 1 return arr @ that index
	for (let key in compare) {
		if (compare[key][0] === 1) {
			differences.push(newArr[compare[key][1]]);
		}
	}

	return differences;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

/*
case 1: arr1 has nothing in it and arr2 does
case 2: arr2 has nothing in it rand arr1 does
case 3: arr1 && arr2 contain nothing

------- find the differences ---->
*/

// Solution 2 (Imperative Solution)
function diffArray(arr1, arr2) {
	let newArr = [];

	function onlyInFirst(first, second) {
		// Looping through an array to find elements that don't exist in another array
		for (let i = 0; i < first.length; i++) {
			// if indexOf returns -1, then the num do-esn't exist in the other array.
			if (second.indexOf(first[i]) === -1) {
				// Pushing the elements unique to first to newArr
				newArr.push(first[i]);
			}
		}
	}

	onlyInFirst(arr1, arr2);
	onlyInFirst(arr2, arr1);

	return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//Solution 3
function diffArray(arr1, arr2) {
	return arr1.concat(arr2).filter((item) => !arr1.includes(item) || !arr2.includes(item));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

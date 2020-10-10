/* 
Basic Algorithm Scripting: Chunky Monkey
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
	let newArr = [];
	let tempArr = [];

	// Loop through arr
	// Push each element into tempArr until tempArr has reached it's max size (size)
	// Reset tempArr
	for (let i = 0; i < arr.length; i++) {
		tempArr.push(arr[i]);

		if (tempArr.length == size) {
			newArr.push(tempArr);
			tempArr = [];
		}
	}

	// Case: length of tempArr doesn't = size after looping.. there are remaining elements that exist in tempArr
	if (tempArr.length != 0) {
		newArr.push(tempArr);
	}

	return newArr;
}

// chunkArrayInGroups(["a", "b", "c", "d"], 2); // 2 pass
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) // 2 pass
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) // 3 pass
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) // 2 pass
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) // 3 pass
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) // 3 pass
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) // 5 pass

/* 
for every some num (size) of elements, push a new array of those elements into newArrr

push elements into tempArr until count == size
  then push tempArr into newArr
  reset temp arr
*/

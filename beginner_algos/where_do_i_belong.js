function getIndexToIns(arr, num) {
	// Array is empty
	if (arr.length == 0) {
		return 0;
		// Array is not empty
	} else {
		// Sort the array
		arr.sort((a, b) => {
			return a - b;
		});

		// num is out of bounds of the array: ([3, 10, 5], 3) || ([2, 5, 10], 15)
		if (num < arr[0] || num == arr[0]) {
			return 0;
		} else if (num > arr[arr.length - 1]) {
			return arr.length;
		}

		// track prev and cur
		// this starts the loop off with two pointers 1 step ahead of each other
		// compare the two values and check if the num needs to go in between them
		// return index

		let prev = arr[0];
		let cur = arr[1];

		for (let i = 1; i < arr.length; i++) {
			if (num > prev && num < cur) {
				return i;
			} else if (num == cur || num == prev) {
				return i;
			}

			cur = arr[i + 1];
			prev = arr[i];
		}
	}
}

getIndexToIns([3, 10, 5], 3);

/*
find the index where the num should be in a sorted index

loop through the arr
track prev and cur

if num > prev && num < cur => idx == i - 1

else contine looping 

prev = arr[i-1]
cur = arr[i]
*/

//  Solution 2

function getIndexToIns(arr, num) {
	arr.sort(function (a, b) {
		return a - b;
	});

	for (var a = 0; a < arr.length; a++) {
		if (arr[a] >= num) return a;
	}

	return arr.length;
}

getIndexToIns([10, 20, 30, 40, 50], 35);

// Solution 3
// best solution

function getIndexToIns(arr, num) {
	arr.push(num);
	arr.sort(function (a, b) {
		return a - b;
	});
	return arr.indexOf(num);
}

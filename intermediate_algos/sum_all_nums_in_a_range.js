/* 
Intermediate Algorithm Scripting: Sum All Numbers in a Range

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/

function sumAll(arr) {
	// Sort the array
	arr.sort((a, b) => {
		return a - b;
	});

	// Track sum & start.. set start to the largest number in the array
	let sum = 0;
	let start = arr[1];

	// Count down by one until we reach the same value as arr[0]
	// Add each num to the sum =>> 4 + 0, 3 + 4, 2 + 7, 1 + 9 = 10
	while (start >= arr[0]) {
		sum += start;
		start--;
	}

	return sum;
}

sumAll([1, 4]);

// 4-1 = 3
// 3-1 = 2
// 2-1 = 1 <== stopping point .. when start == arr[0]

function sumAll2(arr) {
	// Find the min and max nums of the array
	let max = Math.max(arr[0], arr[1]);
	let min = Math.min(arr[0], arr[1]);
	let sum = 0;

	// Loop from the min to the max and add those nums to the sum
	for (let i = min; i <= max; i++) {
		sum += i;
	}

	return sum;
}

sumAll2([1, 4]);

/* 
Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/

function sumFibs(num) {
	let fibSeq = [];

	let count = 0;
	// 2 pointers -- cur is one step ahead of previous -- tracks prev and cur location in the fib sequence
	let prev, cur;

	while (count < num) {
		// Sets the first two nums of the fib sequence since we know they are always 1,1
		if (fibSeq.length < 2) {
			fibSeq.push(1);
			if (fibSeq.length == 2) {
				//  Once we get the first two values in the sequence, initialize prev & cur
				cur = fibSeq[count];
				prev = fibSeq[count - 1];
			}
			count++;
			// Don't do anything else until the first two values are in the sequence
			continue;
		}

		// Calculate the next num in the sequence
		let nextNum = prev + cur;

		// Additional stopping condition
		// Stops the loop when we reach or are 1 step from reaching the num passed into the fxn
		if (nextNum > num) {
			break;
		}

		fibSeq.push(nextNum);

		cur = fibSeq[count];
		prev = fibSeq[count - 1];

		count++;
	} // end of while loop

	// Filter out odd nums
	let oddNums = fibSeq.filter((num) => {
		return num % 2 !== 0;
	});

	// Sum all odd nums
	return oddNums.reduce((acc, val) => {
		return acc + val;
	}, 0);
}

sumFibs(75025);

// UNDERSTAND //
// pointers
// 1,1,(nextNum)
// ^ ^
// 1,1,3,(nextNum)
//   ^ ^
// 1,1,3,5,(nextNum)
//     ^ ^

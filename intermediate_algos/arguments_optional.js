/* 
Intermediate Algorithm Scripting: Arguments Optional
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/

function addTogether() {
	var args = Array.from(arguments);

	// check if any element in the array is not a number -> return undefined
	// ELSE --> len > 1?
	// --> sum the nums
	// or
	//  check if the only element is a number
	// SUM ??????
	return args.some((n) => typeof n !== 'number')
		? undefined
		: args.length > 1
		? args.reduce((acc, n) => (acc += n), 0)
		: (n) => {
				// console.log('test:', n, args[0]);

				if (typeof n === 'number') {
					return n + args[0];
				} else {
					return undefined;
				}
		  };
}

// test here
addTogether(2, 3);
addTogether(23, 30);
addTogether(5)(7);

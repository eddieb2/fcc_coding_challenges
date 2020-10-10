/*
Intermediate Algorithm Scripting: Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

You have to use the arguments object
*/

function destroyer(...arg) {
	// arg[0] == array
	// arg[1 and on] are values to remove from the array
	let arr = arg[0];
	let toRemove = [];

	// loop through remaining args
	// push values to toRemove array
	for (let i = 1; i < arg.length; i++) {
		toRemove.push(arg[i]);
	}

	// Filter out items that toRemove includes
	// return items that evaluate to true...
	// toRemove includes 2 > true > do the opp, so true evals to false, then filter will exclude that item.. this leads us to exclude all items that are either 2 || 3
	return arr.filter((item) => !toRemove.includes(item));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

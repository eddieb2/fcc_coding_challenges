/* 
Intermediate Algorithm Scripting: Everything Be True
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.
*/

function truthCheck(collection, pre) {
	for (let i = 0; i < collection.length; i++) {
		// check if the key doesn't exist
		if (!(pre in collection[i])) {
			return false;
		} else {
			// if key exists, check for falsy values
			if (!collection[i][pre]) {
				return false;
			}
		}
	}
	return true;
}

truthCheck(
	[
		{ user: 'Tinky-Winky', sex: 'male' },
		{ user: 'Dipsy', sex: 'male' },
		{ user: 'Laa-Laa', sex: 'female' },
		{ user: 'Po', sex: 'female' },
	],
	'sex'
); // true

truthCheck(
	[
		{ user: 'Tinky-Winky', sex: 'male' },
		{ user: 'Dipsy' },
		{ user: 'Laa-Laa', sex: 'female' },
		{ user: 'Po', sex: 'female' },
	],
	'sex'
); // false

truthCheck(
	[
		{ user: 'Tinky-Winky', sex: 'male', age: 0 },
		{ user: 'Dipsy', sex: 'male', age: 3 },
		{ user: 'Laa-Laa', sex: 'female', age: 5 },
		{ user: 'Po', sex: 'female', age: 4 },
	],
	'age'
); // false

truthCheck(
	[
		{ name: 'Pete', onBoat: true },
		{ name: 'Repeat', onBoat: true },
		{ name: 'FastForward', onBoat: null },
	],
	'onBoat'
); // false

truthCheck(
	[
		{ name: 'Pete', onBoat: true },
		{ name: 'Repeat', onBoat: true, alias: 'Repete' },
		{ name: 'FastForward', onBoat: true },
	],
	'onBoat'
); // true

truthCheck([{ single: 'yes' }], 'single'); // true

truthCheck([{ single: '' }, { single: 'double' }], 'single'); // false

truthCheck([{ single: 'double' }, { single: undefined }], 'single'); // false

truthCheck([{ single: 'double' }, { single: NaN }], 'single'); //false

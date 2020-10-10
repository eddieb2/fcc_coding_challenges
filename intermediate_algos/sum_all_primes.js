/* 
Intermediate Algorithm Scripting: Sum All Primes
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/

function sumPrimes(num) {
	let numSet = new Set();
	let compositeSet = new Set();

	// Adds all nums to numSet, in the range of NUM  (ex: 0-10)
	for (let i = 0; i <= num; i++) {
		numSet.add(i);
	}

	// Find all composite numbers
	/* 
    
    */
	for (let i = 0; i <= num; i++) {
		// 0 & 1 are composites, add to compositeSet
		// Do nothing else until both 0 and 1 are in compositeSet
		if (i === 0 || i === 1) {
			compositeSet.add(i);
			continue;
		}

		// Makes sure that 2 isn't added to compositeSet
		if (i !== 2) {
			// Add all even nums to compositeSet
			if (i % 2 == 0) {
				compositeSet.add(i);
			}

			// Find all factors of potential prime nums (odd nums only)
			let factor;
			for (let x = 3; x < num; x += 2) {
				factor = i * x;

				// Stops loop when factor is higher than the highest num in our range
				if (factor > num) {
					break;
				}

				compositeSet.add(factor);
			}
		}
	}

	// If any number in compositeSet is in numSet, remove it. This removes all composite numbers and leaves us with only prime numbers
	numSet.forEach((num) => {
		if (compositeSet.has(num)) {
			numSet.delete(num);
		}
	});

	let primeArr = [...numSet];

	return primeArr.reduce((acc, val) => {
		return acc + val;
	});
}

sumPrimes(10);

/*
-PRIME NUMS-
------------
- greater than 1 //
- exactly 2 divisors 
      - 1 
      - itself

1. Find all prime nums that are less than or equal to NUM
2. Return the sum of the prime nums found from step 1


get rid of all even nums except 2
*/

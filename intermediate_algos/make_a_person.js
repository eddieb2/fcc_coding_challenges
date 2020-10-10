var Person = function (firstAndLast) {
	this.name = firstAndLast;

	this.setFirstName = function (first) {
		let newName = this.name.split(' ');
		newName[0] = first;
		this.name = newName.join(' ');

		return this.name;
	};

	this.setLastName = function (last) {
		let newName = this.name.split(' ');
		newName[1] = last;
		this.name = newName.join(' ');

		return this.name;
	};

	this.setFullName = function (firstAndLast) {
		return (this.name = firstAndLast);
	};

	this.getFirstName = function () {
		let firstName = this.name.split(' ')[0];
		return firstName;
	};

	this.getLastName = function () {
		let lastName = this.name.split(' ')[1];
		return lastName;
	};

	this.getFullName = function () {
		return this.name;
	};

	return firstAndLast;
};

var bob = new Person('Bob Ross');
// console.log(bob.name)

bob.getFullName();
bob.setFirstName('Eddie');
bob.setLastName('Blanciak');
bob.setFullName('Bob Ross');
bob.getFirstName();
bob.getLastName();

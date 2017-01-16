/**
 * This is a simple viewmodel - javascript that defines the data and behavior of your UI
 */

/** 
 * Capitlise persons last name
 */
function AppViewModel() {
	this.firstName = ko.observable("Bert");
	this.lastName = ko.observable("Bertington");

	this.fullName = ko.computed(function() {
		return this.firstName() + " " + this.lastName();
	}, this);

	this.capitalizeLastName = function() {
		// Get current lastName value: Notice that, to read or write an observable's value, you call it as a function.
		var currentVal = this.lastName(); 
		this.lastName(currentVal.toUpperCase()); // Set lastName to uppercase
	}
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());


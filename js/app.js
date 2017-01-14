/**
 * This is a simple viewmodel - javascript that defines the data and behavior of your UI
 */

/** 
 * Often you will want to combine/convert multiple observable values to make other values
 * Below is a simple example of combining 2 observablue values, by using ko.computed()
 * Computed properties: are observable and based on the value of other observable values

 * How does it work?
 * Things are synchronised thanks to automatic dependency tracking - in the example fullName depends on firstName etc
 * When changes are made to firstName and lastName, this is reflected in fullName
 * A ripple effect triggers in the object graph causing the minimal set of refreshes needed to bring your viewmodel and UI up to date

*/
function AppViewModel() {
	this.firstName = ko.observable("Bert");
	this.lastName = ko.observable("Bertington");

	this.fullName = ko.computed(function() {
		return this.firstName() + " " + this.lastName();
	}, this)
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());


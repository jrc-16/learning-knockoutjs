/**
 * This is a simple viewmodel - javascript that defines the data and behavior of your UI
 */

// 'observables' are properties that automatically issue notifications when their values change
function AppViewModel() {
	this.firstName = ko.observable("Bert");
	this.lastName = ko.observable("Bertington");
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());
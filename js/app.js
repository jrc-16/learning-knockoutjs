/**
 * This is a simple viewmodel - javascript that defines the data and behavior of your UI
 */

// AppViewModel() sets properties which are declared in the text data binding in index.html
function AppViewModel() {
	this.firstName = "Bert";
	this.lastName = "Bertington";
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());
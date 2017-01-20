/**
 * Loop through a list of people and display a meal 
 */

// Class to represent a row in the seat reservations grid
// Notice we use upper case 'S' to denote a Constructor function
//
function SeatReservation(name, initalMeal) {
	var self = this; // Set 'this' to this functions scope
	self.name = name;
	self.meal = ko.observable(initalMeal);
}

// Overall viewmodel for this screen, along with initial state
function ReservationsViewModel() {
	var self = this;

	// Non editable catalog data - would come from the server
	// but we hard code here so we have some dummy data
	self.availableMeals = [
		{ mealName: "Standard (sandwich)", price: 0 },
		{ mealName: "Premium (lobster)", price: 34.95 },
		{ mealName: "Ultimate (whole zebra)", price: 290 }
	];

	// seats is an observable array which contains reseravation
	// objects
	self.seats = ko.observableArray([
		new SeatReservation("Steve", self.availableMeals[0]),
		new SeatReservation("Bert", self.availableMeals[0]),
	]);
}

ko.applyBindings(new ReservationsViewModel());
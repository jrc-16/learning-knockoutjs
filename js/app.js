/**
 * @TODO: add description of what the below code is/does
 */

/**
 * Class to represent a row in the seat reservations grid
 * Notice we use upper case 'S' to denote a Constructor function
 */
function SeatReservation(name, initalMeal) {
	var self = this; // Set 'this' to this functions scope
	self.name = name;
	self.meal = ko.observable(initalMeal);
}

// Overall viewmodel for this screen, along with initial state
function ReservationsViewModel() {
	var self = this;

	// Non editable catalog data - would come from the server
	self.availableMeals = [
		{ mealName: "Standard (sandwich)", price: 0 },
		{ mealName: "Premium (lobster)", price: 34.95 },
		{ mealName: "Ultimate (whole zebra)", price: 290 }
	];

	// Editable data
	self.seats = ko.observableArray([
		new SeatReservation("Steve", self.availableMeals[0]),
		new SeatReservation("Bert", self.availableMeals[0]),
	]);
}

ko.applyBindings(new ReservationsViewModel());
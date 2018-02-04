// Class to represent a row in the seat reservations grid
// Notice we use upper case 'S' to denote a Constructor function
function SeatReservation(name, initalMeal) {
  var self = this; // Set 'this' to this functions scope
  self.name = name;
  self.meal = ko.observable(initalMeal);


  self.formattedPrice = ko.computed(function() {
    var price = self.meal().price;
    return price ? "$" + price.toFixed(2) : "None";
  });
}

// Overall viewmodel for this screen, along with initial state
function ReservationsViewModel() {
  var self = this;

  // Non editable catalog data - would come from the server
  // but we hard code here so we have some dummy data
  self.availableMeals = [{
      mealName: "Standard (sandwich)",
      price: 0
    },
    {
      mealName: "Premium (lobster)",
      price: 34.95
    },
    {
      mealName: "Ultimate (whole zebra)",
      price: 290
    }
  ];

  // seats is an observable array which contains reseravation
  // objects
  self.seats = ko.observableArray([
    new SeatReservation("Steve", self.availableMeals[0]),
    new SeatReservation("Bert", self.availableMeals[0]),
  ]);

  // push another SeatReservation instance onto the seats observableArray
  self.addSeat = function() {
    self.seats.push(new SeatReservation("", self.availableMeals[0]));
  };

  // >>> Step 4 <<<
  // Remove a seat reseravation by using KOs own remove() method
  // See http://knockoutjs.com/documentation/observableArrays.html > replace, remove and removeAll
  self.removeSeat = function(seat) {
    self.seats.remove(seat);
  };

  // >>> Step 4 <<<
  self.totalSurcharge = ko.computed(function() {
    // Get the seats observableArray
    var price = self.seats();

    // Set a counter to increment when prices are added together
    var totalNum = 0;

    // Using Knockouts own looping tool,
    // - iterate through each seat
    // - check if formattedPrice is not set to None
    // - Remove the $ character from the price
    // - Turn the string into a number
    // - Add all prices together
    ko.utils.arrayForEach(price, function(item) {
      if (item.formattedPrice() !== 'None') {
        total = item.formattedPrice();
        total = total.substr(1);
        total = parseInt(total);
        totalNum += total;
      }
    });

		return totalNum;
  });
}

ko.applyBindings(new ReservationsViewModel());

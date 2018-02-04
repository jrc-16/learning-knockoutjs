// Class to represent a row in the seat reservations grid
// Notice we use upper case 'S' to denote a Constructor function
//
function SeatReservation(name, initalMeal) {
  var self = this; // Set 'this' to this functions scope
  self.name = name;
  self.meal = ko.observable(initalMeal);

  // >>> Step 3 <<<
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

  // Remove a seat reseravation by using KOs own remove() method
  // See http://knockoutjs.com/documentation/observableArrays.html > replace, remove and removeAll
  self.removeSeat = function(seat) {
    //debugger

    self.seats.remove(seat);
  };

  self.totalSurcharge = ko.computed(function() {
    // get price of all reservations
    // add all reservations together
    // return total reservations

    var price = self.seats();
    var totalNum = 0;
    ko.utils.arrayForEach(price, function(item) {
      // console.log('item is: ');
      // console.log(item.formattedPrice());

      if (item.formattedPrice() !== 'None') {

        total = item.formattedPrice();
        total = total.substr(1);
        total = parseInt(total);
        totalNum += total
        console.log('total is: ');
        console.log(totalNum);
      }
    });

		return "Total surcharge: $" + totalNum;

  });
}

ko.applyBindings(new ReservationsViewModel());

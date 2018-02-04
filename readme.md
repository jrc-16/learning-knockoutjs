# @TODO: amend information for step 4

## [Removing items and showing a total surcharge > Step 4 of 5](http://learn.knockoutjs.com/#/?tutorial=collections)
> Since you can add items, you should be able to remove them too, right? As you'd expect, this is merely a matter of updating the underlying data.

In this step we
- Added a click binding to refer to the removeSeat method in the ViewModel
- Remove the selected reservation from the seats observableArray
- Added a visible binding to display the containing html when totalSurcharge property is greater than 0
- Iterate through the seats observableArray, add all price properties together and return the total
- Display the totalSurcharge computed observable (which contains the total price)
-

```html
<!-- // Step 4 -->
<a data-bind="click: $root.removeSeat" href="#">Remove</a>

<h3 data-bind="visible: totalSurcharge() > 0">
	Total surcharge: $<span data-bind="text: totalSurcharge"></span>
</h3>
<!-- // Step 4 END-->
```

```javascript
// >>> Step 4 <<<
// Remove a seat reservation by using KOs own remove() method
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
```

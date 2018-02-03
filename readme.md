## (Adding Items > Step 2 of 5) [http://learn.knockoutjs.com/#/?tutorial=collections]
> Following the MVVM pattern makes it very simple to work with changeable object graphs such as arrays and hierarchies. You update the underlying data, and the UI automatically updates in sync.

In this step we
- add a button which has a click data binding
- onclick, a new reservation is added (using the observableArray push method)

```html
<table>
	<tbody data-bind="*foreach: seats*">
	    <tr>
	        <td data-bind="text: name"></td>
	        <td data-bind="text: meal().mealName"></td><!-- // Access the meal objects properties by invoking (meal is a ko observable) -->
	        <td data-bind="text: meal().price"></td>
	    </tr>
	</tbody>

    <!-- Todo: Generate table body -->
</table>
```

Push another SeatReservation instance onto the seats observableArray

```javascript
self.addSeat = function() {
	self.seats.push(new SeatReservation("", self.availableMeals[0]));
};
```

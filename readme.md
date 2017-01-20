Very often, you'll want to generate repeating blocks of UI elements, especially when displaying lists where the user can add and remove elements. Knockout lets you do that easily, using *observable arrays* and the **foreach** binding.

Example of using a foreach binding to iterate over the 'seats' observable array

```html
<table>
	<tbody data-bind="*foreach: seats*">
	    <tr>
	        <td data-bind="text: name"></td>
	        <td data-bind="text: meal().mealName"></td><!-- // Access the meal objects properties by inkoving (meal is a ko observable) -->
	        <td data-bind="text: meal().price"></td>
	    </tr>
	</tbody>

    <!-- Todo: Generate table body -->
</table>	

Example of using an observable array. 'seats' it used by the foreach example above

```javascript
// seats is an observable array which contains reseravation
// objects
self.seats = ko.observableArray([
	new SeatReservation("Steve", self.availableMeals[0]),
	new SeatReservation("Bert", self.availableMeals[0]),
]);


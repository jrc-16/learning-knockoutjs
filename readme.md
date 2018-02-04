# @TODO: amend information for step 4

## [Making the data editable > Step 3 of 5](http://learn.knockoutjs.com/#/?tutorial=collections)
> You can use bindings within foreach blocks just the same as anywhere else, so it's pretty easy to upgrade what we've got into a full data editor.

In this step we
- Changed the Name table cell into an input field.
- Changed the mealName field to drop down menu.
- A computed observable 'formattedPrice' that checks for an updated price when a new drop down item is chosen.
- Added 'formattedPrice' which updates when a different option is chosen from the dropdown menu.

```html
<!-- // Step 3 -->
<td>
	<input data-bind="value: name"/>
</td>
<td>
	<select data-bind="options: $root.availableMeals, value: meal, optionsText: 'mealName'" /></select>
</td>
<td data-bind="text: formattedPrice"></td>

```

```javascript
<!-- // Step 3 -->
self.formattedPrice = ko.computed(function() {
	var price = self.meal().price;
	return price ? "$" + price.toFixed(2) : "None";
});
```

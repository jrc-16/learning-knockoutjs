## [Removing items and showing a total surcharge > Step 5 of 5](http://learn.knockoutjs.com/#/?tutorial=collections)
> Having followed the MVVM pattern and got an object-oriented representation of the UI's data and behaviors, you're in a great position to sprinkle on extra behaviors in a very natural and convenient way.

In this step we
- Displayed the amount of seats reserved using the array length property
- Displayed a warning only when the seat reservation was exceeded. This was done by using the `visible` binding to toggle display of elements and using the `css` binding to apply a red background
- Used the `enable` binding to disable the reservation button when the seats().length exceeds 6
-


```html
<!-- // Step 5 -->
<h2>Your seat reservations
	<span data-bind="text: seats().length"></span>
</h2>

<div data-bind="visible: seats().length === 6, css: {'warning': seats().length === 6}">
	<p>Total amount of reservations exceeded</p>
</div>

<button data-bind="click: $root.addSeat, enable: seats().length < 6">Reserve another seat</button>
<!-- // Step 5 END-->
```

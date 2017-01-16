Example of using a click binding
```html
<button data-bind="click: capitalizeLastName">Go caps</button>
```

Invoked when we click on the capitalizeLastName binding
```javascript
	this.capitalizeLastName = function() {
		// Get current lastName value: Notice that, to read or write an observable's value, you call it as a function.
		var currentVal = this.lastName(); 
		this.lastName(currentVal.toUpperCase()); // Set lastName to uppercase
	}
```


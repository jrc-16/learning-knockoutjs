Example of using knockout computed properties
```javascript
	this.fullName = ko.computed(function() {
    	return this.firstName() + " " + this.lastName();    
}, this);
```


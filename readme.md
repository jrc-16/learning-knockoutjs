## [Single page applications > Step 1 of 5](http://learn.knockoutjs.com/#/?tutorial=webmail)
> Many of the most modern, responsive, and engaging web-based UIs have gone beyond traditional Ajax and have become single page applications: the visitor can seemingly navigate within a single page at the speed of a native application.

> The best-known example is probably GMail, but these days it's an increasingly widespread technique. Such applications use hash-based or pushState navigation to support back/forward gestures and bookmarking. I

In this step we
- Began to create a Web Mail Client
- We created a list of folders
- Made the folders clickable using Observables
- Added Bootstrap CSS and Open Iconic so to give the UI a better look


```html
<!-- // Step 1 -->
<ul data-bind="foreach: folders" class="folders">

	<!-- If the name of the folder we clicked on is in the folders array, apply the aler-dark class  -->
	<li data-bind="click: $parent.goToFolder,
	css: {'alert alert-dark' : $data == $parent.chosenFolderId()}">
		<span data-bind="text: $data" class="oi oi-folder"></span>
	</li>
</ul>
<!-- // Step 1 END-->
```

```js
// the viewmodel class
function WebmailViewModel() {
  var self = this;

  // Properties
  self.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
  self.chosenFolderId = ko.observable();

  // Methods
  self.goToFolder = function( folder ) {
    self.chosenFolderId( folder );
    // console.log('chosenFolderId called');
  };
}
```

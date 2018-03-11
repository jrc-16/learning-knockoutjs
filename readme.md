## [Displaying a grid of mails > Step 2 of 5](http://learn.knockoutjs.com/#/?tutorial=webmail)
> Now the visitor can choose a folder, let's show them the mails in that folder.

In this step we
- Added the jQuery `$.get()` method
  - in the `$.get()` we refer to the `mail` file
  - loop through it and if the folder we clicked on matches the current iterated `mail` folder entry, display it
- Use a Knockout `with` binding to display one folder ( at time of writing (11/03/18) currently a limitation )

```html
<!-- // Step 2 -->
<div data-bind="with: chosenFolderData">
  <p data-bind="text: $data.first_name"></p>
  <p data-bind="text: $data.last_name"></p>
  <p data-bind="text: $data.email"></p>
</div>
<!-- // Step 2 END-->
```

```js
$.get('/mail', {folder: folder},
function( data ) {
  // debugger

  var parsedJson = JSON.parse( data );

  console.log( "parsed data is: " );
  console.log( data );

  // @JC 4/3//18: i need to make chosenFolderData an observable array so that i can push multiple folder types. currnelty, the problem is only the last folder type is being used.
  for(var i=0; parsedJson.mail.length > i; i++) {
    if(parsedJson.mail[ i ].folder === folder) {
      self.chosenFolderData(parsedJson.mail[ i ]);
    }
  }

} ); // END $.get()
```

## Resources

[Asynchronous JavaScript #1 - What is Asynchronous JavaScript?](https://www.youtube.com/watch?v=YxWMxJONp7E&list=PL4cUxeGkcC9jAhrjtZ9U93UMIhnCc44MH)

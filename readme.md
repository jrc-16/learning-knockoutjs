## [Displaying a grid of mails > Step 2 of 5](http://learn.knockoutjs.com/#/?tutorial=webmail)
> Now the visitor can choose a folder, let's show them the mails in that folder.

In this step we:
- Added the jQuery `$.get()` method
  - in the `$.get()` we refer to the `mail` file
  - loop through it and if the folder we clicked on matches the current iterated `mail` folder entry, display it
- Changed to chosenFolderData from an observable to an observableArray so we can push multiple emails into a group
- Used push() on the observableArray
- Changed `with` binding to `foreach` so to loop through the array of objects
- Added table markup so make the UI look more like an email client

```html
<!-- // Step 2 -->

<!-- Print all folders -->
<table class="table" style="margin-bottom:0 ;">
  <tbody>
    <tr data-bind="foreach: folders" class="folders">
      <td data-bind="click: $parent.goToFolder,
      css: {'alert alert-dark' : $data == $parent.chosenFolderId()}" scope="col">
        <span data-bind="text: $data" class="oi oi-folder"></span>
      </td>
    </tr>
  </tbody>
</table>

<!--
  // Display all emails
-->
<table class="table">
  <thead>
    <tr>
      <th scope="col">Fist name</th>
      <th scope="col">Last name</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody data-bind="foreach: chosenFolderData">
    <tr>
      <td data-bind="text: $data.first_name" scope="row"></td>
      <td data-bind="text: $data.last_name">Mark</td>
      <td data-bind="text: $data.email">Otto</td>
    </tr>
  </tbody>
</table>
<!-- // Step 2 END-->
```

```js
// Step 2
$.get('/mail', {
    folder: folder
  },
  function(data) {

    // debugger
    self.chosenFolderData([]);

    var parsedJson = JSON.parse(data);

    console.log("parsed data is: ");
    console.log(data);

    for (var i = 0; parsedJson.mail.length > i; i++) {
      if (parsedJson.mail[i].folder === folder) {
        self.chosenFolderData.push(parsedJson.mail[i]);
      }
    }
  }); // END $.get()
  // Step 2 END
```

## Resources

[Asynchronous JavaScript #1 - What is Asynchronous JavaScript?](https://www.youtube.com/watch?v=YxWMxJONp7E&list=PL4cUxeGkcC9jAhrjtZ9U93UMIhnCc44MH)

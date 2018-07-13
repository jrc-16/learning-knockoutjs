## [Displaying a grid of mails > Step 3 of 5](http://learn.knockoutjs.com/#/?tutorial=webmail)
> The visitor can now navigate between folders. What about letting them open and read specific emails? As with folder navigation, let's start by defining a viewmodel property to represent data loaded for a specific mail

In this step we:
- Enabled users to select an email to view it in more detail
- Added a css binding that added the 'alert alert-dark' classes for the selected email

```html
<!-- // Step 3 -->
<tr data-bind="click: $parent.openEmail, css: {'alert alert-dark' : $data.id === $parent.selectedEmailId()} ">
<!-- // Step 3 END-->
```

```html
<!-- // Step 3 -->

<tbody data-bind="foreach: chosenFolderData">

  <!--  Note: The UI updates after main.js has ran, so we are able to check what we clicked on against each $data.id -->
  <tr data-bind="click: $parent.openEmail, css: {'alert alert-dark' : $data.id === $parent.selectedEmail() } ">
    <td data-bind="text: $data.first_name" scope="row"></td>
    <td data-bind="text: $data.last_name"></td>
    <td data-bind="text: $data.email"></td>
  </tr>
</tbody>

<!-- // Step 3 END-->
```

```js
// Step 3

// We added observable
self.selectedEmail = ko.observable();

// We then update the observable with a folder ID, so we can match $data.id in the View
self.selectedEmail( folder.id );

// Step 3 END
```

```js
// Step 3

// Display the contents of an email when we click on the preview
self.openEmail = function( folder ) {

  // JCARNEY 02/07/18: Update the observable when we click on the row
  self.selectedEmail( folder.id );

  // Normalise the previous email text
  self.displayEmail("");

  // Use Jquery ajax to fetch the mail file ( local mock data ).
  // Once we have it, enter the callback function to process it.
  $.get('/mail', {
      folder: folder
    },
    function(data) {

      // Put the data into JSON format so we can start manipulating it.
      var parsedJson = JSON.parse(data);

      console.log("parsed data is: ");
      console.log(data);

      // Loop through the array
      for (var i = 0; parsedJson.mail.length > i; i++) {
        if (folder.id && parsedJson.mail[i].id === folder.id) {

          // If theres no content, set it to an empty string ( helps avoid errors )
          if( !parsedJson.mail[i].content ) {
            parsedJson.mail[i].content = " ";
          }

          // Set the header for displaying detailed emails
          parsedJson.mail[ i ].from = `${parsedJson.mail[ i ].first_name} ${parsedJson.mail[ i ].last_name}`;

          // Updated the displayEmail observable with the 'mail' portion of the mock data
          self.displayEmail(parsedJson.mail[i]);
        }
      }
    }); // END $.get()
};

// Step 3 END
```

## Resources

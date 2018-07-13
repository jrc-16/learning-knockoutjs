
// the viewmodel class
function WebmailViewModel() {
  var self = this;

  // Properties
  self.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
  self.chosenFolderId = ko.observable();
  self.chosenFolderData = ko.observableArray( [] );
  self.displayEmail = ko.observable();
  self.selectedEmail = ko.observable();

  // Methods

  // Display contents of each folder
  self.goToFolder = function( folder ) {
    self.chosenFolderId( folder );

    $.get('/mail', {
        folder: folder
      },
      function(data) {
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

    // Net Ninja tut for jquery ajax:
    // See https://www.youtube.com/watch?v=YxWMxJONp7E&list=PL4cUxeGkcC9jAhrjtZ9U93UMIhnCc44MH
    // $.get('mail.json', function(data) {
    //   debugger
    //
    //   console.log( data );
    // });
  };

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

  // Default to the Inbox onload
  self.goToFolder( 'Inbox' );
}

ko.applyBindings(new WebmailViewModel());

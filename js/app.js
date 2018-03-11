
// the viewmodel class
function WebmailViewModel() {
  var self = this;

  // Properties
  self.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
  self.chosenFolderId = ko.observable();
  self.chosenFolderData = ko.observableArray( [] );
  self.displayEmail = ko.observable();

  // Methods
  self.goToFolder = function( folder ) {
    self.chosenFolderId( folder );

    $.get('/mail', {
        folder: folder
      },
      function(data) {
        debugger
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

  self.openEmail = function( folder ) {
    self.displayEmail("");

    $.get('/mail', {
        folder: folder
      },
      function(data) {
        debugger
        // self.chosenFolderData([]);
        var parsedJson = JSON.parse(data);

        console.log("parsed data is: ");
        console.log(data);

        for (var i = 0; parsedJson.mail.length > i; i++) {
          if (folder.id && parsedJson.mail[i].id === folder.id) {
            if( !parsedJson.mail[i].content ) {
              parsedJson.mail[i].content = " ";
            }
            self.displayEmail(parsedJson.mail[i]);
          }
        }
      }); // END $.get()

  };

  self.goToFolder( 'Inbox' );
}

ko.applyBindings(new WebmailViewModel());

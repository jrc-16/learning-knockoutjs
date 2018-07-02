
// the viewmodel class
function WebmailViewModel() {
  var self = this;

  // Properties
  self.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
  self.chosenFolderId = ko.observable();
  self.chosenFolderData = ko.observableArray( [] );
  self.displayEmail = ko.observable();
  self.selectedEmailId = ko.observable();
  self.selectedEmail = ko.observable();

  // Methods
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

  self.openEmail = function( folder ) {
debugger
    // @JC 02/07/18: Update the observable when we click on the row
    self.selectedEmailId( folder.id );

    self.displayEmail("");



    $.get('/mail', {
        folder: folder
      },
      function(data) {


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

            // dispaly selected email with a coloured row

            // if( self.selectedEmailId() === parsedJson.mail[i].id ) {
            //   parent.selectedEmailId();
            // }

          }
        }
      }); // END $.get()

  };

  self.goToFolder( 'Inbox' );
}

ko.applyBindings(new WebmailViewModel());


// the viewmodel class
function WebmailViewModel() {
  var self = this;

  console.log("test"); 

  // Properties
  self.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
  self.chosenFolderId = ko.observable();
  self.chosenFolderData = ko.observable();

  // Methods
  self.goToFolder = function( folder ) {
    self.chosenFolderId( folder );

    // $.get('mockdata.json', {folder: folder}, self.chosenFolderData);


    // works
    $.get('/mail', {folder: folder},
    function( data ) {
debugger

      var parsedJson = JSON.parse( data );

      console.log( "parsed data is: " );
      console.log( data );

      // @JC 4/3//18: i need to make chosenFolderData an observable array so that i can push multiple folder types. currnelty, the problem is only the last folder type is being used.
      for(var i=0; parsedJson.mail.length > i; i++) {
        if(parsedJson.mail[ i ].folder === folder) {
          self.chosenFolderData(parsedJson.mail[ i ]);
        }
      }

    } );

    // Net Ninja tut for jquery ajax
    // $.get('mail.json', function(data) {
    //   debugger
    //
    //   console.log( data );
    // });
  };
}

ko.applyBindings(new WebmailViewModel());

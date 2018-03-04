
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

ko.applyBindings(new WebmailViewModel());

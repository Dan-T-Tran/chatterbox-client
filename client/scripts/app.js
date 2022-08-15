// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),
  //Maybe make a spinner icon do something later???

  username: 'anonymous',
  //Default username? Maybe it'll change? With a input/prompt?

  initialize: function() {
    App.username = window.location.search.substr(10);
    //Reassigns username?

    FormView.initialize();
    //Gives the messagebox and submit button functionality?
    RoomsView.initialize();
    //A way to divide messages based on rooms?
    MessagesView.initialize();
    //Renders message box? Message itself? Message box with functions around a message?
    //All messages in a box/stream

    // Fetch initial batch of messages
    App.startSpinner();
    //Shows the spinner, disables submit button
    App.fetch(App.stopSpinner);

    App.refreshPage();

    ///Refresh button somewhere, click to reinvoke functions

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      // console.log(data);
      // Delete the messages and roomlist before repopulating them
      $('.messageBox').empty();
      $('select').empty();
      Messages.dumpMessages(data);
      MessagesView.render();
      Rooms.addRooms(data);
      RoomsView.render();
      callback();

      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
    });
  },

  _data: undefined,

  duplicateData: false,

  dataCheck: function(data) {
    App.duplicateData = false;

    Parse.readAll(function(data) {
      if (App._data === undefined || App._data !== data[0].message_id) {
        App._data = data[0].message_id;
        App.duplicateData = true;
      }
    })
  },

  refreshPage: function() {
    //For some reason, the if conditional had to be before App.dataCheck();
    if (App.duplicateData === true) {
      App.fetch();
    }
    App.dataCheck();
    setTimeout(App.refreshPage, 5000);
  },

  startSpinner: function() {
    App.$spinner.show();
    //Show the spinner
    FormView.setStatus(true);
    //Disables the submit button
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    //Fades out spinner image
    FormView.setStatus(false);
    //Enables submit button
  }
};

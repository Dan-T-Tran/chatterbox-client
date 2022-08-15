// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  //A way to divide messages based on rooms?

  $button: $('#rooms button'),
  $select: $('#rooms select'),



  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.handleChange();
  },

  render: function() {
    // TODO: Render out the list of rooms.
    if (Rooms.selectedRoom !== undefined) {
      $('select').append(`<option value="">${Rooms.selectedRoom}</option>`);
    } else {
     $('select').append(`<option value="">--Please choose an option--</option>`);
    }
    for (var i = 0; i < Rooms._data.length; i++) {
      // $('#rooms select').append(RoomsView.renderRoom(Rooms._data[i]));
      $('select').append(RoomsView.renderRoom(Rooms._data[i]));
    }

  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    var $roomName = (`<option value=${roomname}>${roomname}</option>`);
    return $roomName;
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    /// Invoke render room using selected room
    $('select').change(function() {
      // Rooms.selectedRoom = $(this).children(':selected').attr('selected', true);
      // $(this).children(':selected').attr('selected', true);
      Rooms.selectedRoom = $('select option:selected').text();
      MessagesView.render();
    });
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    /// Open up an input box to input a custom room name
    ///  Add to Rooms._data
  }

};

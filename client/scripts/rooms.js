// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: [],
  selectedRoom: 'lobby',

  ///_data is a way to store unique roomnames

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

  addRooms: function(data) {
    Rooms._data = [];
    for (var i = 0; i < data.length; i++) {
      if (!Rooms._data.includes(data[i].roomname) && data[i].roomname !== Rooms.selectedRoom) {
        Rooms._data.push(data[i].roomname);
      }
    }
  }

};
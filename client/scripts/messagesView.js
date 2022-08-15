// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  //Renders message box? Message itself? Message box with functions around a message?
  //All messages in a box/stream

  $chats: $('#chats'),
  $messageBox: $('<div class="messageBox"></div>'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    $(MessagesView.$chats).append(MessagesView.$messageBox);
  },

  render: function() {
    $('.messageBox').empty();
    // TODO: Render _all_ the messages.
    // Should invoke renderMessage
    for (var i = 0; i < Messages._data.length; i++) {
      // MessagesView.$messageBox.append(MessagesView.renderMessage(Messages._data[i]));

      if (Rooms.selectedRoom === 'lobby') {
        $('.messageBox').append(MessagesView.renderMessage(Messages._data[i]));
      } else {
        if (Messages._data[i].roomname === Rooms.selectedRoom) {
          $('.messageBox').append(MessagesView.renderMessage(Messages._data[i]));
        }
        //need to only choose specific room
      }
    }
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    message.username = _.escape(message.username);
    message.text = _.escape(message.text);
    message.roomname = _.escape(message.roomname);
    return MessageView.render(message);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};
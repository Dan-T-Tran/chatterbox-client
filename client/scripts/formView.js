// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    var message = {};
    message.username = App.username;
    message.text = $('#message').val();
    message.roomname = $('select option:selected').text();
    // console.log('first console');
    // $('body').remove();

    Parse.create(message, App.fetch);
    // console.log('second console');
    // MessagesView.render();
    // App.fetch();
    // Parse.readAll((data) => {
    //   // examine the response from the server request:
    //   // console.log(data);
    //   // Delete the messages and roomlist before repopulating them
    //   $('select').empty();
    //   Messages.dumpMessages(data);
    //   MessagesView.render();
    //   Rooms.addRooms(data);
    //   RoomsView.render();
    //   console.log('third console');
    // });
    // console.log('fourth console');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    // on initialize, active = true
    // if (active)
    //    status = 'true'
    // else
    //    status = null
    FormView.$form.find('input[type=submit]').attr('disabled', status);
    // if wheel of death is spinning, submit button is disabled
  }

};

/*
[mumbojumbo                                         ]
[Submit]
*/
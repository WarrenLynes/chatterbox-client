// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    console.log(Messages);
    this.render();
  },

  render: function () {
    // TODO: Render _all_ the messages.

    // using Messages data create / render HTML
    // iterate over Messages
    // var templates = [];
    /* for (var i of Messages._data) {
      //// call renderMessage with each message
      var template = this.renderMessage(i);
      var $node = $(template);
      $node.on('click', '.username', MessagesView.handleClick);
      // append message HTML to div#chats
      $('#chats').append($node);
    }
 */
    for (var i = 0; i < Messages._data.length; i++) {
      //// call renderMessage with each message
      // var template = this.renderMessage(i);
      var $node = $(
        `
          <div class="chat">
            <div class="username">
              ${Messages._data[i].username}
            </div>
            <div>
              ${Messages._data[i].text}
              <div>
                ${Messages._data[i].create_at}
              </div>
            </div>
          </div>
        `
      );
      $node.on('click', function (e) {
        MessagesView.handleClick(Messages._data[i]);
      });
      // append message HTML to div#chats
      $('#chats').append($node);
    }
    // $('#chats').html(templates);

  },

  /*  var handleUsernameClick = function (event) {
     renderFeed($(this).text().slice(1)); // remove @ in username
     $button.text('Back');
   }; */

  // I'd like to see the Feed change so that it shows only the clicked user's
  // full list of Tweets. "Update Feed" button change into a "Back" button
  // var $username = $('div.username');
  // $username.on('click', handleUsernameClick);

  renderMessage: function (message) {
    return MessageView.render(message);
  },

  handleClick: function (message) {
    console.log('user: ', $(this).find('username').text());
    console.log($(this).text());
    console.log('message: ', message);
    // console.log(message);

    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }
};

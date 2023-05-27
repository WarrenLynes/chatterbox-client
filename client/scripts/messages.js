// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: [],

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
  setData: function (data) {
    this._data = data;
  },

  retrieve: function (start, end) {
    return this._data.slice(start, end);
  },

  add: function (message) {
    this._data.push(message);
  },

  remove: function (messageId) {
    this._data = this._data.filter(item => item.messageId !== messageId);
  },

  update: function (message) {
    for (var i = 0; i < this._data.length; i++) {
      if (this._data[i].message_id === message.message_id) {
        this._data[i] = message;
      }
    }
  }
};
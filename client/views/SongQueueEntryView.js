// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  tagName: "li",
  // your code here!
  template: _.template('<span>(<%= artist %>)</span><span><%= title %></span>'),

  events: {
    'click': function(){
      this.model.dequeue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});

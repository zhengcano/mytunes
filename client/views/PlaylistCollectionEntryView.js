var PlaylistCollectionEntryView = Backbone.View.extend({
  tagName: "li",
  // your code here!
  template: _.template('<span><%= name %></span>'),

  events: {
    'click': function(){
      this.model.makeCurrent();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});

var LibraryTitleView = Backbone.View.extend({

  tagName: 'td',

  template: _.template('<td>(<%= artist %>)</td><td>[<%= count %>]</td><td><%= title %></td>'),

  events: {
    'click': function() {
      this.model.enqueue();
    }
  },

  render: function(){
    //

    return this.$el.html(this.template(this.model.attributes));

  }

});

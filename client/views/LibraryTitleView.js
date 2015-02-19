var LibraryTitleView = Backbone.View.extend({

  tagName: 'td',

  template: _.template('(<%= artist %>)</td><td><%= title %></td><td>(<%= count %> plays)'),

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

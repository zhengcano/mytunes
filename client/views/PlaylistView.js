var PlaylistView = Backbone.View.extend({

  tagName: "table",

  template: _.template('<th><%= name %></th>'),

  initialize: function() {
    this.render();
  },

  attributes: {
    'id':'currentlist'
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();
    this.$el.html(this.template(this.model.attributes)).append(
      this.model.get('tracks').map(function(song){
        return new PlaylistEntryView({model: song}).render();
      })
    );
  }

});

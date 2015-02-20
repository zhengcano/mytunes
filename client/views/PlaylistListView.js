var PlaylistCollectionView = Backbone.View.extend({
  tagName: "ul",

	initialize: function(){
    this.render();
  },

  attributes: {
    'id':'playlists'
  },

  render: function(){
    this.$el.children().detach();

    this.$el.html('<h3>Playlists</h3>').append(
      this.collection.map(function(playlist){
        return new PlaylistCollectionEntryView({model: playlist}).render();
      })
    );
  }

});

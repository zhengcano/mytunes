var PlaylistCollectionView = Backbone.View.extend({
  tagName: "ul",

	initialize: function(){
    this.render();
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

var PlaylistButton = Backbone.Model.extend({
  initialize: function(){
    this.set('name', 'playlist');
  },
  addPlaylist: function(){
    this.trigger('addPlaylist', this);
  }
});

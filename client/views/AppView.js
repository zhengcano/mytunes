// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});
    this.playlistView = new PlaylistCollectionView({collection: this.model.get('playlistCollection')});
    this.playlistButtonView = new PlaylistButtonView({model: this.model.get('playlistButton')});
    this.currentPlaylistView = new PlaylistView({model: this.model.get('currentPlaylist')});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);

    this.model.on('change:currentPlaylist', function(model){
      this.currentPlaylistView.remove();
      this.currentPlaylistView =  new PlaylistView({'$el':this.currentPlaylistView.$el, model: this.model.get('currentPlaylist')});
      //this.currentPlaylistView.render();
      this.render();
      this.playerView.render();
      this.libraryView.render();
      this.songQueueView.render();
      this.playlistView.render();
      //this.playlistButtonView.render();
      this.currentPlaylistView.render();
    }, this);

    this.model.on('updatePlay', function(){
      this.currentPlaylistView.render();
    }, this);

    this.model.on('updateList', function(){
      this.currentPlaylistView.render();
    }, this);
    // update queue once something is added
    this.model.on('enqueue', function(){
      this.songQueueView.render();
    }, this);

    this.model.on('updateLib', function(){
      this.libraryView.render();
    }, this);

    this.model.on('updatePlaylistCollection', function(){
      this.playlistView.render();
    }, this);

  },

  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el,
      this.songQueueView.$el,
      this.playlistView.$el,
      this.playlistButtonView.$el,
      this.currentPlaylistView.$el
    ]);
  }

});

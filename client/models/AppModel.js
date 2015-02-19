// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new SongModel());
    this.set('currentPlaylist', new Playlist());
    this.set('playlistCollection', new PlaylistCollection());
    this.set('songQueue', new SongQueue());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */


    params.library.on('play', function(song){
      this.set('currentSong', song);
      song.set('count', song.get('count')+1);
      this.trigger('updateLib', this);
    }, this);

    params.library.on('enqueue', function(song){
      this.get('songQueue').add(song);
      this.trigger('enqueue', this);
    }, this);

    params.library.on('enlist', function(song){
      if (this.get('playlistCollection').length > 0){
        this.get('playlistCollection').add(song);
        this.trigger('updatePlay', this);
      }
    });

    this.get('songQueue').on('update', function(){
      this.trigger('enqueue', this);
    }, this);
  }

});

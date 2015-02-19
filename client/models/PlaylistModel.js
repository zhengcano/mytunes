var Playlist = Backbone.Model.extend({
  initialize: function(name){
  	name = name || 'playlist';
  	this.set('tracks', new Tracks());
  	this.set('name', name);

  	this.get('tracks').on('add', function(){
  		this.trigger('updatePlaylist', this);
  	});

  	this.get('tracks').on('remove', function(){
  		this.trigger('updatePlaylist', this);
  	});

  }
});

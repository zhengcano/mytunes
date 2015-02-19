var PlaylistCollection = Backbone.Collection.extend({
	initialize: function(){
  	this.on('add', function(){
  		this.trigger('updateCollection', this);
  	});

  	this.on('remove', function(){
  		this.trigger('updateCollection', this);
  	});
	}
});
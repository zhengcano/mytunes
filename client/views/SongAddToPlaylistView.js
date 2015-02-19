var SongAddToPlaylistView = Backbone.View.extend({
	tagName: 'td',

	template: _.template('<span class="addtolist">Add to Playlist</span>'),

	events: {
		'click': function(){
			this.model.enlist();
		}
	},

	render: function(){
    return this.$el.html(this.template());
  }

});
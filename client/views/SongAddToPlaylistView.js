var SongAddToPlaylistView = Backbone.View.extend({
	tagName: 'td',

	template: _.template('<td><i class="fa fa-upload fa-fw addtolist thumb-box"></i></td>'),

	events: {
		'click': function(){
			this.model.enlist();
		}
	},

	render: function(){
    return this.$el.html(this.template());
  }

});

var PlaylistButtonView = Backbone.View.extend({
  tagName: 'form',

  template: _.template('<input type="text" id="playlistField"><button type="button" onclick="false" id="newList">Add</button>'),

  events: {
    "click button": function(){
      var input = $(this.$el[0][0]);
      this.model.set('name', input.val());
      this.model.addPlaylist();
    }
  },

  initialize: function(){
    this.render();
  },

  render: function(){
    return  this.$el.html(this.template());
  }


});

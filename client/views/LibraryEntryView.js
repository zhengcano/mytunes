// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  events: {
    'click .up': function(){
      this.$el.addClass('upvoted');
    },
    'click .down': function(){
      this.$el.addClass('downvoted');
    }
  },

  render: function(){
    //

    var node = this.$el.append( new LibraryTitleView({model: this.model}).render() );
    node.append( new SongAddToPlaylistView({model: this.model}).render() );
    return node.append('<td><i class="fa fa-thumbs-o-up fa-fw up thumb-box"></td><td></i><i class="fa fa-thumbs-o-down fa-fw down thumb-box"></i></td>');
  }

});

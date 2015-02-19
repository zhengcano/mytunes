// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  render: function(){
    //

    var node = this.$el.append( new LibraryTitleView({model: this.model}).render() );

    return node.append( new SongAddToPlaylistView({model: this.model}).render() );
  }

});

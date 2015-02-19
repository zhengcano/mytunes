// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on("ended", function(){
      this.shift();
      if (this.length > 0){
        this.playFirst();
      }
      this.trigger("update", this);
    }, this);

    this.on("dequeue", function(song){
      var index = this.indexOf(song);
      if (index === 0){
        this.shift();
        if (this.length > 0){
          this.playFirst();
        }
      } else {
        var removed = this.remove(song);
      }
        this.trigger("update", this);
    }, this);

    this.on("add", function(){
      if (this.length < 2){
        this.playFirst();
      }
    }, this);

  },

  playFirst: function(){
    var model = this.at(0);
    model.play();
  }
});

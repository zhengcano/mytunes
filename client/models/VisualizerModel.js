var Visualizer = Backbone.Model.extend({
  initialize: {
    this.set('analyser', context.createAnalyser());
    this.set('smoothing', 0.8);
    this.set('fftSize', 2048);
    this.set('minDecibels', 140);
    this.set('maxDecibels', 0);
  }
});

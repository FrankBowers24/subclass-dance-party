var makeRainbowDancer = function(top, left, timeBetweenSteps){
  this._timeBetweenSteps = timeBetweenSteps;
  makeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this._hue = 0;

};

makeRainbowDancer.prototype = Object.create(makeDancer.prototype);
makeRainbowDancer.prototype.constructor = makeRainbowDancer;

makeRainbowDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this, this._timeBetweenSteps);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  $node.css('border-color', hsl(hue, "100%","100%"));

  hue = (hue + 1) % 360;

  this.$node.css(styleSettings);
};

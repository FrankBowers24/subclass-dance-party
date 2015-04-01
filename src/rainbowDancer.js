var RainbowDancer = function(top, left, timeBetweenSteps){
  timeBetweenSteps = 100;
  Dancer.call(this, top, left, timeBetweenSteps );
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this._hue = 0;

}

RainbowDancer.prototype = Object.create(Dancer.prototype);
RainbowDancer.prototype.constructor = RainbowDancer;

RainbowDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this, this._timeBetweenSteps);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //
  var color = "hsl(" + this._hue + ", 100%, 50%)";
  this.$node.css('border-color', color);

  this._hue = (this._hue + 5) % 360;
};

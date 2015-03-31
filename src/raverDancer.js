
// http://gifdanceparty.giphy.com/img/littleraver.gif
var makeRaverDancer = function(top, left, timeBetweenSteps){
  this._timeBetweenSteps = timeBetweenSteps;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this._angle = 0;
  this._centerX = $("body").width() / 2;
  this._centerY = $("body").height() / 2;

  this.$node = $('<img class="dancer raver" src="http://gifdanceparty.giphy.com/img/littleraver.gif"></img>');

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function


};

makeRaverDancer.prototype = Object.create(makeDancer.prototype);
makeRaverDancer.prototype.constructor = makeRaverDancer;

makeRaverDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this, this._timeBetweenSteps);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  var radius = 150;
  this._angle += Math.PI / 32;

  var x = this._centerX + radius * Math.cos(this._angle);
  var y = this._centerY + radius * Math.sin(this._angle);

  this.setPosition(y,x);
};


// http://gifdanceparty.giphy.com/img/littleraver.gif
var RaverDancer = function(top, left, timeBetweenSteps){
  left = this._centerX = $("body").width() / 2;
  top = this._centerY = $("body").height() / 2;
  Dancer.call(this, top, left, timeBetweenSteps);
  this._angle = 0;

  this.$node = $('<img class="dancer raver" src="http://gifdanceparty.giphy.com/img/littleraver.gif"></img>');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function


};

RaverDancer.prototype = Object.create(Dancer.prototype);
RaverDancer.prototype.constructor = RaverDancer;

RaverDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this, this._timeBetweenSteps);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  if (!this._pause) {
    var radius = 100;
    this._angle += Math.PI / 32;

    this._x = this._centerX + radius * Math.cos(this._angle);
    this._y = this._centerY + radius * Math.sin(this._angle);

    this.setPosition(this._y,this._x);
  }
};

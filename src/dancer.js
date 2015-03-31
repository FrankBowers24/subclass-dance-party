// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this._x = left;
  this._y = top;

  this.step(timeBetweenSteps);

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(this._y, this._x);
  this._pause = false;
};

makeDancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    //position: "absolute",
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.step = function(timeBetweenSteps){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), timeBetweenSteps);
};

makeDancer.prototype.lineUp = function(x, y) {
  this.setPosition(y, x);
  this._pause = !this._pause;
  this._x = x;
  this._y = y;
}

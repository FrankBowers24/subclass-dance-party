var makeInteractiveDancer = function(top, left, timeBetweenSteps){
  this._timeBetweenSteps = timeBetweenSteps;
  makeDancer.call(this, top, left, timeBetweenSteps);
  var that = this;
  this._size = 10;
  this._minSize = 10;
  this._maxSize =  200;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node.on('mouseenter',function(event){
    that.grow(event);
    console.log('on: ', event);
  });

};

makeInteractiveDancer.prototype = Object.create(makeRainbowDancer.prototype);
makeInteractiveDancer.prototype.constructor = makeInteractiveDancer;

makeInteractiveDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this, this._timeBetweenSteps);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.css({ "border-width": this._size});
  this._size += 10;
  this._size = (this._size > this._maxSize) ? this._minSize : this._size;
};

makeInteractiveDancer.prototype.grow = function(event) {
  console.log(window.event);
}

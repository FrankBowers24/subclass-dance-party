var InteractiveDancer = function(top, left, timeBetweenSteps){
  this._timeBetweenSteps = timeBetweenSteps;
  Dancer.call(this, top, left, timeBetweenSteps);
  var that = this;
  this._size = 10;
  this._minSize = 10;
  this._maxSize =  200;
  this._hover = false;
  this.$node.addClass("interactive");
  //this.$node = $('<span class="dancer interactive"></span>');
  //this.setPosition(this._y,this._x);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // this.$node.on('mouseenter',function(event){
  //   that.grow(event);
  // });

  this.$node.on('mouseleave',function(event){
    that.grow(event);
  });

  this.$node.mouseover(function(event) { that.grow(event); })

};

InteractiveDancer.prototype = Object.create(RainbowDancer.prototype);
InteractiveDancer.prototype.constructor = InteractiveDancer;

InteractiveDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this, this._timeBetweenSteps);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  if(this._hover) {
    this.$node.css({ "border-width": this._size});
    this._size += 10;
    this._size = (this._size > this._maxSize) ? this._minSize : this._size;
  }
};

InteractiveDancer.prototype.grow = function(event) {
  this._hover = !this._hover;
};

var makeRoamingDancer = function (top, left, timeBetweenSteps){
  this._timeBetweenSteps = timeBetweenSteps;
  this._angle = Math.random() * 2 * Math.PI;
  this._speed = Math.random() * 20 + 5;
  makeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

makeRoamingDancer.prototype = Object.create(makeDancer.prototype);
makeRoamingDancer.prototype.constuctor = makeRoamingDancer;

makeRoamingDancer.prototype.step = function () {

  makeDancer.prototype.step.call(this, this._timeBetweenSteps);
  if (!this._pause) {

      this._x = this._x + Math.cos(this._angle) * this._speed;
      this._y = this._y + Math.sin(this._angle) * this._speed;

      if(window.innerWidth < this._x || window.innerHeight < this._y || this._x < 0 || this._y < 0) {
        this._angle += Math.PI;
      }

      this._x = Math.min(window.innerWidth, this._x);
      this._x = Math.max(0, this._x);
      this._y = Math.min(window.innerHeight, this._y);
      this._y = Math.max(0, this._y);

      this.setPosition(this._y,this._x);
  }
};

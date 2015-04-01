describe("RaverDancer", function() {

  var raverDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    raverDancer = new RaverDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(raverDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that does not adjust the raver position if the dancer are told to line up", function() {
    sinon.spy(raverDancer.$node, 'toggle');
    raverDancer.lineUp(0,0); //tell the raver to line up
    var old_x = raverDancer._x;
    var old_y = raverDancer._y;
    raverDancer.step();
    expect(raverDancer._x).to.be.equal(old_x);
    expect(raverDancer._y).to.be.equal(old_y);
    raverDancer.lineUp(0,0);
  });

  describe("dance", function(){
    it("the raver angle should be (3 * PI) / 32 after 3 steps ", function(){
      sinon.spy(raverDancer, "step");
      expect(raverDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary... //step 1
      clock.tick(timeBetweenSteps); //step 2

      expect(raverDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps); // step 3
      expect(raverDancer.step.callCount).to.be.equal(2);

      var angleShouldBe = (Math.PI / 32) * 3;
      expect(raverDancer._angle).to.be.equal(angleShouldBe);
    });
  });
});

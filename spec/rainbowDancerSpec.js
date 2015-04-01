describe("rainbowDancer", function() {

  var rainbowDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    rainbowDancer = new RainbowDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(rainbowDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that adjusts the hue by 5 every step invocation", function() {
    sinon.spy(rainbowDancer.$node, 'toggle');
    rainbowDancer.step();
    expect(rainbowDancer._hue).to.be.equal(5);
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(rainbowDancer, "step");
      expect(rainbowDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(rainbowDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(rainbowDancer.step.callCount).to.be.equal(2);

      expect(rainbowDancer._hue).to.be.equal(15);
    });
  });
});

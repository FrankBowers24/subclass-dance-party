describe("interactiveDancer", function() {

  var interactiveDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    interactiveDancer = new InteractiveDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(interactiveDancer.$node).to.be.an.instanceof(jQuery);
  });

  xit("should grow on step if mouse is over dancer", function() {
    sinon.spy(interactiveDancer.$node, 'toggle');
    var oldWidth = interactiveDancer.$node.width();
    var oldHeight = interactiveDancer.$node.height();
    interactiveDancer.$node.trigger('mouseover');
    interactiveDancer.step();
    expect(interactiveDancer.$node.width()).to.not.equal(oldWidth);
    expect(interactiveDancer.$node.height()).to.not.equal(oldHeight);
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(interactiveDancer, "step");
      expect(interactiveDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(interactiveDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(interactiveDancer.step.callCount).to.be.equal(2);
    });
  });
});

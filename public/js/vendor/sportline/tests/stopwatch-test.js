var s = require('../index.js');

describe('A default instance of Stopwatch()', function () {
  describe('The initial state', function () {
    var w = new s.Stopwatch();
    it('should read 00:00 000', function () {
      w.read().should.equal('00:00 000');
    });
  });
  describe('#start()', function () {
    it('should increment 00:00 000', function (done) {
      var w = new s.Stopwatch();
      w.start();
      setTimeout(function () {
        w.read().should.not.equal('00:00 000');
        done();
      }, 100);
    });
    it('should increment milliseconds', function (done) {
      var w = new s.Stopwatch();
      w.start();
      setTimeout(function () {
        w.readMs().should.be.above(0);
        done();
      }, 100);
    });
  });
  describe('#stop()', function (done) {
    var w = new s.Stopwatch();
    w.start();
    it('should prevent the time from changing more', function (done) {
      setTimeout(function () {
        w.stop();
        var currentTimeString = w.read();
        var currentTimeInt = w.readMs();
        setTimeout(function () {
          w.read().should.equal(currentTimeString);
          w.readMs().should.equal(currentTimeInt);
          done();
        }, 100);
      }, 100);
    });
  });
  describe('The sequence of starting, pressing lap, then stopping', function () {
    var w = new s.Stopwatch();
    w.start();
    it('should result in 1 lap', function () {
      setTimeout(function () {
        w.lap();
        setTimeout(function () {
          w.stop();
          w.getLaps().length.should.equal(1);
        });
      }, 100);
    }, 100);
  });
  describe('The sequence of starting, pressing lap, then stopping, then pressing lap', function () {
    var w = new s.Stopwatch();
    w.start();
    it('should result in 2 laps which add up to the full elapse time', function () {
      setTimeout(function () {
        w.lap();
        setTimeout(function () {
          w.stop();
          w.getLaps().length.should.equal(1);
          w.lap();
          w.getLaps().length.should.equal(2);
          var lapsMs = w.getLapsMs();
          var sum = 0;
          for (var i = 0, length = lapsMs.length; i < length; i++) {
            sum += lapsMs[i];
          }
          sum.should.equal(w.readMs());
        }, 100);
      }, 100);

    });
  });
  describe('#reset()', function () {
    var w = new s.Stopwatch();
    w.start();
    it('should clear the clock and laps', function (done) {
      setTimeout(function() {
        w.stop();
        w.lap();
        w.readMs().should.not.equal(0);
        w.getLaps().length.should.equal(1);
        w.reset();
        w.readMs().should.equal(0);
        w.getLaps().length.should.equal(0);
        done();
      }, 100);
    });
  });
});

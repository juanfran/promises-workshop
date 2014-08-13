describe("testing workshop", function () {
  it.skip("test1", function (done) {
    test1()
      .then(function (value) {
        expect(value).to.be.equal("ok");
        done();
      });
  });

  it.skip("test2", function (done) {
    test2()
      .fail(function (value) {
        expect(value).to.be.equal("fail");
        done();
      });
  });

  it.skip("test3", function (done) {
    var spy = sinon.spy();

    test3()
      .progress(function (value) {
        expect(value).to.be.equal(50);
        spy();
      })
      .then(function (value) {
        expect(value).to.be.equal("ok");
        expect(spy.called).to.be.true;
        done();
      })
  });

  it.skip("test4", function (done) {
    sinon.spy(log, "msg");

    test4();

    setTimeout (function () {
      expect(log.msg.called).to.be.true;

      log.msg.restore();
      done();
    }, 50);
  });

  it.skip("test5", function () {
    sinon.spy(log, "msg");

    var result = test5();

    return expect(result).to.become("send: User id 3");
  });
});

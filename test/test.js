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

  it.skip("test5", sinon.test(function () {
    this.spy(log, "msg");

    var result = test5();

    return expect(result).to.become("send: User id 3");
  }));

  it.skip("test6", function (done) {
    var stub = sinon.stub(api, "verify");
    stub.returns(false);

    var result = test6();

    result.fail(function (value) {
      expect(value).to.be.equal("fail");
      stub.restore();

      done();
    });
  });

  it.skip("test6 b", function (done) {
    var stub = sinon.stub(api, "verify");
    stub.returns(true);

    var result = test6();

    result.then(function (value) {
      expect(value).to.be.equal("ok");
      stub.restore();

      done();
    });
  });

  it.skip("test7", function (done) {
    var spy = sinon.spy(log, "msg");

    var result = test7(1);

    result.done(function () {
      expect(spy.calledWith("ok")).to.be.true;
      spy.restore();
      done();
    });
  });

  it.skip("test7 b", function (done) {
    var spy = sinon.spy(log, "msg");

    var result = test7(2);

    result.done(function () {
      expect(spy.calledWith("fail")).to.be.true;
      spy.restore();
      done();
    });
  });

});

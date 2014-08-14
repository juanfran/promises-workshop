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

  it.skip("test8", function (done) {
    getFriends = sinon.stub(api, "getUserFriends").returns(true);
    getArticles = sinon.stub(api, "getUserArticles").returns(false);
    printUsers = sinon.stub(util, "printUsers");
    printArticles = sinon.stub(util, "printArticles");
    isValidUser = sinon.stub(api, "isValidUser").returns(true);

    test8().done(function () {
      expect(getFriends.called).to.be.true;
      expect(getArticles.called).to.be.true;
      expect(printUsers.withArgs(true).called).to.be.true;
      expect(printArticles.withArgs(false).called).to.be.true;

      getFriends.restore();
      getArticles.restore();
      printUsers.restore();
      printArticles.restore();
      isValidUser.restore();

      done();
    });
  });

  it.skip("test8 b", function (done) {
    getFriends = sinon.stub(api, "getUserFriends").returns(true);
    getArticles = sinon.stub(api, "getUserArticles").returns(false);
    printUsers = sinon.stub(util, "printUsers");
    printArticles = sinon.stub(util, "printArticles");
    isValidUser = sinon.stub(api, "isValidUser").returns(false);
    logMsg = sinon.stub(log, "msg");

    test8().done(function () {
      expect(getFriends.called).to.be.false;
      expect(getArticles.called).to.be.false;
      expect(printUsers.called).to.be.false;
      expect(printArticles.called).to.be.false;
      expect(logMsg.called).to.be.true;

      getFriends.restore();
      getArticles.restore();
      printUsers.restore();
      printArticles.restore();
      isValidUser.restore();
      logMsg.restore();

      done();
    });
  });

  it.skip("test9", function (done) {
    var server1 = sinon.stub(api, "server1").returns(1000);
    var server2 = sinon.stub(api, "server2").returns(10234);
    var backup = sinon.stub(api, "backup").returns(true);
    var logMsg = sinon.stub(log, "msg").returns(true);

    test9()
      .done(function () {
        expect(server1.called).to.be.true;
        expect(server2.called).to.be.true;
        expect(logMsg.called).to.be.false;
        expect(backup.withArgs(sinon.match.array).called).to.be.true;

        server1.restore();
        server2.restore();
        backup.restore();
        logMsg.restore();

        done();
    });
  });

  it.skip("test9 b", function (done) {
    var server1 = sinon.stub(api, "server1").returns(false);
    var server2 = sinon.stub(api, "server2").returns(10234);
    var backup = sinon.stub(api, "backup").returns(true);
    var logMsg = sinon.stub(log, "msg").returns(true);

    test9()
      .done(function () {
        expect(server1.called).to.be.true;
        expect(server2.called).to.be.true;
        expect(logMsg.called).to.be.true;
        expect(backup.withArgs(sinon.match.array).called).to.be.false;

        server1.restore();
        server2.restore();
        backup.restore();
        logMsg.restore();

        done();
    });
  });
});

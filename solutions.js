var test1 = function () {
  var deferred = Q.defer();

  deferred.resolve('ok');

  return deferred.promise;
};

var test2 = function () {
  var deferred = Q.defer();

  deferred.reject("fail");

  return deferred.promise;
};

var test3 = function () {
  var deferred = Q.defer();

  setTimeout(function () {
    deferred.notify(50);
    deferred.resolve("ok");
  }, 100);

  return deferred.promise;
};

var test4 = function () {
  var deferred = Q.defer();

  deferred.promise.then(function () {
    log.msg("ok");
  });

  deferred.resolve();
};

var test5 = function () {
  return api.getId()
    .then(function (id) {
      return "User id " + id;
    })
    .then(api.send);
};

var test6 = function () {
  return api.getId()
    .then(function (id) {
      return "User id " + id;
    })
    .then(function (text) {
      var deferred = Q.defer();

      setTimeout(function () {
        if (api.verify(text)) {
          deferred.resolve('ok');
        } else {
          deferred.reject('fail');
        }
      }, 100);

      return deferred.promise;
    });
};

var test7 = function (id) {
  return api.userExist(id)
    .then(function () {
      log.msg("ok");
    }, function () {
      log.msg("fail");
    });
};

var log = {
  msg: function () {}
};


var api = {
  getId: function () {
    var deferred = Q.defer();

    deferred.resolve(3);

    return deferred.promise;
  },
  send: function (text) {
    return "send: " + text;
  },
  verify: function (text) {},
  userExist: function (id) {
    var deferred = Q.defer();

    if (id == 1) {
      deferred.resolve("ok");
    } else {
      deferred.reject("fail");
    }

    return deferred.promise;
  }
};

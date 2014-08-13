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
  }
};

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
  },
  server1: function () {
    var deferred = Q.defer();

    deferred.resolve(new Date().getTime());

    return deferred.promise;
  },
  server2: function () {
    var deferred = Q.defer();

    deferred.resolve(new Date().getTime());

    return deferred.promise;
  },
  backup: function () {
    var num = Math.floor((Math.random() * 10) + 1);

    if (num > 5) throw new Error("error");
    else return true;
  },
  getUserFriends: function () {
    return [
      {name: "user1"},
      {name: "user2"}
    ]
  },
  getUserArticles: function () {
    return [
      {title: "article 1"},
      {title: "article 2"}
    ]
  },
  isValidUser: function (id) {
    return Q.fcall(function () {
      return true;
    });
  },
  getCurrentUser: function () {
    return Q.fcall(function () {
      return {id: 5, name: "user 5"};
    });
  }
};

var util = {
  random: function () {
    return Math.floor((Math.random() * 100) + 1);
  },
  printUsers: function (users) {},
  printArticles: function (articles) {}
};

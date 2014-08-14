// - crear la promesa con Q.defer()
// - retornar un promesa
// - resolver la promesa con el valor `ok`

// Q
// deferred.resolve, resuelve la promesa
// deferred.promise, es la promesa en si misma
var test1 = function () {};

// - retornar un promesa
// - rechazar la promesa con el valor `fail`

// deferred.reject, rechaza la promesa
var test2 = function () {};


// - retornar un promesa
// - lanzar una excepción, a los pocos milisegundo

// setTimeout
// deferred.notify
var test3 = function () {};


// - crear una promesa
// - crear un then y el parámetro de promesa completada llamamos al log
// - resolvemos la promesa

// log.msg("ok")
var test4 = function () {};

// - llamar a api.getId() que es una promesa
// - en la primera resolución concatenar lo que reciba como parámetro así "User id " + id y retornarlo
// - en una resolución de la promesa anterior llamar a api.send con el parámetro recibido y retornar lo que devuelve api.send

var test5 = function () {};

// - repetir los pasos 1 y 2 del ejercicio anterior
// - en la resolución de la promesa del paso 2 crear un timeout de 100 y llamar api.verify
// - si api.verify retorna false rechazar la promesa con 'fail' y si api.verify retorna true resolverla con un 'ok'

var test6 = function () {};

// - llamar a api.userExist(), es una promesa
// - test7 recibe un parámetro id que se lo pasa a userExist
// - si llamas a userExist con el parametro 1 va a resolver la promesa
// - si llamas a userExist con cualquier otro parametro va a rechazar la promsa
// - crear el caso de resolver la promesa que tiene que llamar a log.msg("ok")
// - crear el caso de rechazar la promesa rechazada que llamar a log.msg("fail")

var test7 = function (id) {};

// - llamar a oldApi.getCurrentUser() que nos devuelve un json {id: 2, name: "user1"}
// - oldApi es antiguo y funciona con callback y hay que adaptarlo (oldApi.getCurrentUser(callback))
// - coger id y mandarselo a api.isValidUser
// - si devulve true continuar
// - si devuelve false fallar con throw new Error("error"); capturarlo y log.msg("error")
// - llamar a api.getCurrentUserFriends y api.getCurrentUserArticles al mismo tiempo
// - con los resultado de getCurrentUserFriends llamar a util.printUsers
// - con los resultado de getCurrentUserArticles llamar a util.printArticles

var test8 = function () {};

// - usar la función  `util.random` como una promesa
// - pasar el número random que hemos conseguido a 2 servidores, api.server1 y api.server2, tienen que ejecutarse sus peticiones al vez
// - los 2 primeros deberian devolver una fecha si todo ha ido bien
// - si alguno devulve false lanzar una excepción y escribir log.msg('error')
// - tienes que mandar los resultados a api.backup() en un array
// - usa spread

var test9 = function () {};

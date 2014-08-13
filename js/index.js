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
// - retornar la promesa

var test5 = function () {};

// - repetir los pasos 1 y 2 del ejercicio anterior
// - en la resolución de la promesa del paso 2 crear un timeout de 100 y llamar api.verify
// - si api.verify retorna false rechazar la promesa con 'fail' y si api.verify retorna true resolverla con un 'ok'
// - retornar la promesa

var test6 = function () {};

// - llamar a api.userExist(), es una promesa
// - test7 recibe un parámetro id que se lo pasa a userExist
// - si llamas a userExist con el parametro 1 va a resolver la promesa
// - si llamas a userExist con cualquier otro parametro va a rechazar la promsa
// - crear el caso de resolver la promesa que tiene que llamar a log.msg("ok")
// - crear el caso de rechazar la promesa rechazada que llamar a log.msg("fail")
// - retornar la promesa

var test7 = function (id) {};

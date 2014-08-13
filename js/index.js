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
// - si api.verify retorna false rechazar la promesa y si api.verify retorna true resolverla con un 'ok'

//usando el then
//mando parametros abajo y los va sumando
//probar el reject con .then o .fail

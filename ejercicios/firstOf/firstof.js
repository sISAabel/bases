/**
 * Crea una función que devuelva el primer elemento del array que se le pasa como parámetro,
 * en caso de que el array se encuentre vacío, no exista o no sea un array, devolver 0.
 *
 * @param {*} inputArray
 */
function firstOf (inputArray) {
  // Inicio código
  if (typeof (inputArray) === 'object') {
    return inputArray[0]
  } else {
    return 0
  }
  // Fin código
}

module.exports = firstOf

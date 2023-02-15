/**
 * Crea una función que tome una matriz (array) de números y devuelva los números mínimos y máximos,
 * en ese orden.
 *
 * @param {*} inputArray
 */
function minMax (inputArray) {
  // Inicio código
  let min = Infinity
  let max = -Infinity

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] < min) {
      min = inputArray[i]
    } else if (inputArray[i] > max) {
      max = inputArray[i]
    }
  }

  return [min, max]
  // Fin código
}
module.exports = minMax

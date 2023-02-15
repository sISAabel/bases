/**
 * Crear una función que concatene n matrices de entrada, donde n es variable (...args)
 *
 * @param {*} inputArray
 */
function concat (...args) {
  // Inicio código
  const newArray = args.flatMap((num) => num)
  return newArray;
  // Fin código
}
module.exports = concat

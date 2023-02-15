/**
 * Escribe una función que valide si un DNI es correcto
 */
function validar (numero) {
  // Inicio código
  const LETRAS = 'TRWAGMYFPDXBNJZSQVHLCKE'
  const restoDni = numero % 23
  return numero.length === 8 ? LETRAS[restoDni] : 'error'
  // Fin código
}

module.exports = validar

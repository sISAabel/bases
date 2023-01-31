/**
 * Los dardos son un juego de puntería que se juega lanzando dardos de plumas
 *  a un tablero circular con espacios numerados. Nuestro juego de dardos es el
 * más sencillo de todos. La puntuación de un turno se calcula en función de la
 * distancia desde el centro. Necesitas crear una función que tome la ubicación
 * del dardo como dos coordenadas cartesianas (x, y) y devuelva una puntuación
 * basada en la distancia desde el centro, también conocida como diana (x=0, y=0).
 *
 * Puntuaciones de diana y círculo interior = 10 punto
 * Puntuación del anillo central = 5 punto
 * Anillo exterior = 1 punto
 * Fuera de la diana = 0 puntos
 *
 * Jugamos de forma sencilla, por lo que un dardo en el anillo doble o triple cuenta
 * como siempre y no afecta a la puntuación del segmento.
 *
 * El radio del tablero y del círculo es el siguiente
 * Radio del tablero y radio del círculo exterior = 10 unidades
 * Radio del círculo central = 5 unidades
 * Radio del círculo interior = 1 unidad
 *
 * Descripción breve
 *
 * Convierte coordenadas cartesianas (x, y) en coordenadas polares (R, phi) y devuelve
 * la puntuación basada en el valor de R.
 *
 *  R > 10 da 0 puntos
 *  10 >= R > 5 da 1 punto
 *  5 >= R > 1 da 5 puntos
 *  R <= 1 da 10 puntos.
 *
 * Ejemplos
 * dartsScoring(0, 0) ➞ 10
 * dartsScoring(3, 2) ➞ 5
 * dartsScoring(0, -0.8) ➞ 1
 *
 * Notas
 * Los valores X, Y pueden ser tanto positivos como negativos.
 * Los valores X, Y pueden ser int y float.
 * No se darán valores de tipo incorrecto.
 * */

function dartsScoring(x, y) {
	// Inicio código
  // Fin código
}

module.exports = dartsScoring;

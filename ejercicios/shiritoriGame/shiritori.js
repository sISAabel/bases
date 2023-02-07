/**
 * Este ejercicio es una versión inglesa del juego de palabras japonés Shiritori.
 * La premisa básica es seguir dos reglas:
 * - 1: El primer carácter de la siguiente palabra debe coincidir con el último carácter de la palabra anterior.
 * - 2: La palabra no debe estar ya dicha.
 *
 * A continuación se muestra un ejemplo de juego Shiritori:
 * ["word", "dowry", "yodel", "leader", "righteous", "serpent"]  // Válido!
 * ["motive", "beach"]  // Invalido! - beach debe comenzar con "e"
 * ["hive", "eh", "hive"]  // Invalid! - "hive" ya se ha dicho
 *
 * Escribe una clase Shiritori que tenga dos atributos:
 * - words: un array de palabras ya dichas.
 * - game_over: un booleano que es verdadero si el juego ha terminado.
 *
 * Y dos métodos
 * play: Un método que toma una palabra como argumento y comprueba si es válida (la palabra debe seguir las reglas #1 y #2 anteriores).
 *       Si es válida, añade la palabra al array de palabras y devuelve el array de palabras.
 *       Si no es válida (se incumple alguna de las reglas), devuelve "game over" y pone el booleano game_over a true.
 * restart: Un método que establece el array de palabras a uno vacío [] y establece el booleano game_over a false. Debería devolver "game restarted".
 */

class Shiritori {
  // Inicio código
  // Fin código
}

module.exports = Shiritori

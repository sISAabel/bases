/**
* Escribe una clase llamada CoffeeShop, que tiene tres atributos
*
*   name : una cadena (básicamente, de la tienda)
*   menu : un array de items (de tipo objeto), con cada item conteniendo el item (nombre del item), tipo (si es comida o bebida) y precio.
*   orders : una matriz vacía
*
* y siete métodos:
*
*   addOrder: añade el nombre del artículo al final de la matriz de pedidos si existe en el menú. En caso contrario, devuelve "¡Este artículo no está disponible actualmente!".
*   fulfillOrder: si la matriz de pedidos no está vacía, devuelve "¡El {artículo} está listo!". Si la matriz de pedidos está vacía, devuelve "¡Todos los pedidos se han cumplido!".
*   listOrders: devuelve la lista de pedidos realizados, en caso contrario, un array vacío.
*   dueAmount: devuelve el importe total de los pedidos realizados.
*   cheapestItem: devuelve el nombre del artículo más barato del menú.
*   drinksOnly: devuelve sólo los nombres de los artículos de tipo bebida del menú.
*   foodOnly: devuelve sólo los nombres de los artículos de tipo comida del menú.
*
* IMPORTANTE: Los pedidos se realizan en orden FIFO (primero en entrar, primero en salir).
*/

class CoffeeShop {
	constructor (name, menu, orders) {

	}
}

module.exports = CoffeeShop;

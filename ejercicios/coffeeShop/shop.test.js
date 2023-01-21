const CoffeeShop = require("./shop");

test("test player1",() =>{
    expect(player1.getAge()).toBe('Patrick Mahomes is age 24');
});

test("Test CoffeShop", () => {
    expect(shopC.addOrder("hot cocoa")).toBe("This item is currently unavailable!");
});

test("Test CoffeShop", () => {
    expect(shopC.dueAmount()).toBe(0.0);
});

test("Test CoffeShop", () => {
    expect(shopC.addOrder("cheeseburger with fries")).toBe("Order added!");
});

test("Test CoffeShop", () => {
    expect(shopC.addOrder("lemon tea")).toBe("Order added!");
});

test("Test CoffeShop", () => {
    expect(shopC.addOrder("iced coffee")).toBe("Order added!");
});

test("Test CoffeShop", () => {
    expectr(shopC.listOrders()).toBe(["cheeseburger with fries", "lemon tea", "iced coffee"]);
});

test("Test CoffeShop", () => {
    expect(shopC.dueAmount()).toBe(10.94);
});

test("Test CoffeShop", () => {
    expect(shopC.fulfillOrder()).toBe("The cheeseburger with fries is ready!");
});

test("Test CoffeShop", () => {
    expect(shopC.fulfillOrder()).toBe("The lemon tea is ready!");
});

test("Test CoffeShop", () => {
    expect(shopC.fulfillOrder()).toBe("The iced coffee is ready!");
});

test("Test CoffeShop", () => {
    expectr(shopC.listOrders()).toBe([]);
});

test("Test CoffeShop", () => {
    expect(shopC.cheapestItem()).toBe("lemon tea");
});

test("Test CoffeShop", () => {
    expectr(shopC.drinksOnly()).toBe(["hot chocolate", "lemon tea", "iced coffee", "vanilla chai latte"]);
});

test("Test CoffeShop", () => {
    expectr(shopC.foodOnly()).toBe(["cheeseburger with fries", "cinnamon roll"]);
});

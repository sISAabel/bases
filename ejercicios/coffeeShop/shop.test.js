const CoffeeShop = require("./shop");

let [menuA, menuB, menuC] = [
  [
    ["orange juice", "drink", 2.13], ["lemonade", "drink", 0.85], ["cranberry juice", "drink", 3.36],
    ["pineapple juice", "drink", 1.89], ["lemon iced tea", "drink", 1.28], ["apple iced tea", "drink", 1.28],
    ["vanilla chai latte", "drink", 2.48], ["hot chocolate", "drink", 0.99], ["iced coffee", "drink", 1.12],
    ["tuna sandwich", "food", 0.95], ["ham and cheese sandwich", "food", 1.35], ["bacon and egg", "food", 1.15],
    ["steak", "food", 3.28], ["hamburger", "food", 1.05], ["cinnamon roll", "food", 1.05]
  ],
  [
    ["turkey english muffin", "food", 7.99], ["avocado toast", "food", 5.05], ["chocolate croissant", "food", 3.00],
    ["espresso", "drink", 2.99], ["iced caramel macchiato", "drink", 4.50], ["cortado", "drink", 4.00],
    ["nitro cold brew tester", "drink", 8.00]
  ],
  [
    ["cheeseburger with fries", "food", 5.44],
    ["cinnamon roll", "food", 4.99],
    ["hot chocolate", "drink", 2.99],
    ["lemon tea", "drink", 2.50],
    ["iced coffee", "drink", 3.00],
    ["vanilla chai latte", "drink", 4.00]
  ]
].reduce((a, r) => [...a, [...r.map(([n, t, p]) => ({item: n, type: t, price: p}))]], []),

[shopA, shopB, shopC] = [
  new CoffeeShop("*** Deep Into Coffee ***", menuA, []),
  new CoffeeShop("*** Xavier's ***", menuB, []),
  new CoffeeShop("*** Tesha's ***", menuC, [])
]


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

const BasicPlan = require("./videoStream");

test("test p1 - p2", () => {
  expect(p1.compareAge(p2)).toBe("Joel is older than me.");
});


test("Test Basic Plan", () => {
  expect(BasicPlan.canStream()).toBe(true);
});

test("Test Basic Plan", () => {
  expect(BasicPlan.canDownload()).toBe(true);
});

test("Test Basic Plan", () => {
  expect(BasicPlan.numOfDevices()).toBe(1);
});

test("Test Basic Plan", () => {
  expect(BasicPlan.hasSD()).toBe(true);
});

test("Test Basic Plan", () => {
  expect(BasicPlan.hasHD()).toBe(false);
});

test("Test Basic Plan", () => {
  expect(BasicPlan.hasUHD()).toBe(false);
});

test("Test Basic Plan", () => {
  expect(BasicPlan.price()).toBe('$8.99');
});

test("Test Standard Plan", () => {
  expect(StandardPlan.canStream()).toBe(true, 'Remember to add the StandardPlan class!');
});

test("Test Standard Plan", () => {
  expect(StandardPlan.canDownload()).toBe(true);
});

test("Test Standard Plan", () => {
  expect(StandardPlan.numOfDevices()).toBe(2);
});

test("Test Standard Plan", () => {
  expect(StandardPlan.hasSD()).toBe(true);
});

test("Test Standard Plan", () => {
  expect(StandardPlan.hasHD()).toBe(true);
});

test("Test Standard Plan", () => {
  expect(StandardPlan.hasUHD()).toBe(false);
});

test("Test Standard Plan", () => {
  expect(StandardPlan.price()).toBe('$12.99');
});

test("Test Premium Plan", () => {
  expect(PremiumPlan.canStream()).toBe(true, 'Remember to add the PremiumPlan class!');
});

test("Test Premium Plan", () => {
  expect(PremiumPlan.canDownload()).toBe(true);
});

test("Test Premium Plan", () => {
  expect(PremiumPlan.numOfDevices()).toBe(4);
});

test("Test Premium Plan", () => {
  expect(PremiumPlan.hasSD()).toBe(true);
});

test("Test Premium Plan", () => {
  expect(PremiumPlan.hasHD()).toBe(true);
});

test("Test Premium Plan", () => {
  expect(PremiumPlan.hasUHD()).toBe(true);
});

test("Test Premium Plan", () => {
  expect(PremiumPlan.price()).toBe('$15.99');
});

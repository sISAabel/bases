const numInStr = require("./numinstr");

test("Number in string 1", () => {
  expect(numInStr(["abc", "abc10"])).toBe(["abc10"]);
});
test("Number in string 2", () => {
  expect(numInStr(["abc", "ab10c", "a10bc", "bcd"])).toBe(["ab10c", "a10bc"]);
});
test("Number in string 3", () => {
  expect(numInStr(["1", "a", " ", "b"])).toBe(["1"]);
});
test("Number in string 4", () => {
  expect(numInStr(["rct", "ABC", "Test", "xYz"])).toBe([]);
});
test("Number in string 5", () => {
  expect(numInStr(["this IS", "10xYZ", "xy2K77", "Z1K2W0", "xYz"])).toBe([
    "10xYZ",
    "xy2K77",
    "Z1K2W0",
  ]);
});
test("Number in string 6", () => {
  expect(numInStr(["-/>", "10bc", "abc "])).toBe(["10bc"]);
});

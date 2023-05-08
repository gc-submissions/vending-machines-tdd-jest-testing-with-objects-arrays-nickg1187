const { getCoins } = require("../src/js/money-functions.js");

describe("formatCurrency", () => {
  test.todo("add formatCurrency tests here");
});

describe("getCoins", () => {
  test("32 cents produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2.", () => {
    const result = getCoins(32);
    expect(result).toEqual({
      quarters: 1,
      dimes: 0,
      nickels: 1,
      pennies: 2,
    });
  });
});

const getCoins = (cents) => {
  const coinObject = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0,
  };
  let changeLeft = cents;
  while (changeLeft > 0) {
    if (changeLeft >= 25) {
      coinObject.quarters++;
      changeLeft -= 25;
    } else if (changeLeft >= 10) {
      coinObject.dimes++;
      changeLeft -= 10;
    } else if (changeLeft >= 5) {
      coinObject.nickels++;
      changeLeft -= 5;
    } else if (changeLeft >= 1) {
      coinObject.pennies++;
      changeLeft -= 1;
    }
  }
  return coinObject;
};

module.exports = { getCoins };

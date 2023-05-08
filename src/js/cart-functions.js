const calculateChange = (total, payment) => {
  return payment - total;
};

const calculateTotal = (itemsArray) => {
  //   let total = 0;
  //   for (let i = 0; i < itemsArray.length; i++) {
  //     total += itemsArray[i].price;
  //   }
  //   return total;
  return itemsArray.reduce((total, currentObject) => {
    return total + currentObject.price;
  }, 0);
};

const isSufficientPayment = (total, payment) => {
  if (payment >= total) {
    return true;
  } else return false;
};

const addItem = (itemsArray, name, price) => {
  const newItem = {
    name: name,
    price: price,
  };
  itemsArray.push(newItem);
};

const removeItem = (itemsArray, index) => {
  itemsArray.splice(index, 1);
};

module.exports = {
  calculateChange,
  calculateTotal,
  isSufficientPayment,
  addItem,
  removeItem,
};



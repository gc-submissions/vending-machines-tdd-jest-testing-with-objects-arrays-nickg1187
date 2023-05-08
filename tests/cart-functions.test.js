const {
  calculateChange,
  calculateTotal,
  isSufficientPayment,
  addItem,
  removeItem,
} = require("../src/js/cart-functions.js");

describe("calculateChange", () => {
  test("Given total 5 and payment 6, it returns 1", () => {
    //this function returns something, need to store return value in varibale
    const change = calculateChange(5, 6);
    expect(change).toBe(1);
  });
  test("Given total 12.30 and payment 13.03, it returns 0.73", () => {
    const change = calculateChange(12.3, 13.03);
    expect(change).toBeCloseTo(0.73, 2);
  });
  test("Given total 300 and payment 299, it returns -1", () => {
    const change = calculateChange(300, 299);
    expect(change).toBe(-1);
  });
});

describe("isSufficientPayment", () => {
  test("Given total 5 and payment 6, it returns true.", () => {
    const gotEnough = isSufficientPayment(5, 6);
    expect(gotEnough).toBe(true);
  });
  test("Given total 10 and payment 7, it returns false.", () => {
    const gotEnough = isSufficientPayment(10, 7);
    expect(gotEnough).toBe(false);
  });
  test("Given total 3 and payment 3, it returns true.", () => {
    const gotEnough = isSufficientPayment(3, 3);
    expect(gotEnough).toBe(true);
  });
});

describe("calculateTotal", () => {
  test("Given an itemsArray of one item with price 4.99, it returns 4.99", () => {
    //arrange items first
    const dummyArray = [{ name: "Andy", price: 4.99 }];
    //STORE RETURN VALUE IN A VARIABLE
    const sum = calculateTotal(dummyArray);
    //now assert
    expect(sum).toBe(4.99);
  });
  test("Given an itemsArray of three items with prices 3.50, 12.99, and 0.03, it returns 16.52", () => {
    const dummyArray = [
      { name: "Rufus", price: 3.5 },
      { name: "Sean", price: 12.99 },
      { name: "Mike", price: 0.03 },
    ];
    const sum = calculateTotal(dummyArray);
    expect(sum).toBeCloseTo(16.52);
  });
  test("Given an empty itemsArray, it returns 0", () => {
    const dummyArray = [];
    const sum = calculateTotal(dummyArray);
    expect(sum).toBe(0);
  });
  test("Given an itemsArray of two items with prices 5 and 6, it returns 11", () => {
    //arrange items first
    const dummyArray = [
      { name: "Scott", price: 5 },
      { name: "Chad", price: 6 },
    ];
    //STORE RETURN VALUE IN A VARIABLE
    const sum = calculateTotal(dummyArray);
    //now assert
    expect(sum).toBe(11);
  });
});

describe("addItem", () => {
  test("Call addItem with an empty itemsArray with name Beans and price 3. Then check that itemsArray has one item in it", () => {
    const dummyArray = [];
    //no return value to store
    addItem(dummyArray, "Beans", 3);
    expect(dummyArray).toEqual([{ name: "Beans", price: 3 }]);
  });
  test("Call addItem with itemsArray, name Sugar and price 2. Then check that itemsArray has two items in it", () => {
    const dummyArray = [{ name: "Beans", price: 3 }];
    //no return value to store
    addItem(dummyArray, "Sugar", 2);
    expect(dummyArray).toEqual([
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
    ]);
  });
  test("Starting with an array of 3 items, add another item to the array to equal 4 items", () => {
    const dummyArray = [
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
      { name: "Flour", price: 1 },
    ];
    //no return value to store
    addItem(dummyArray, "Cornmeal", 2.5);
    expect(dummyArray).toEqual([
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
      { name: "Flour", price: 1 },
      { name: "Cornmeal", price: 2.5 },
    ]);
  });
});

describe("removeItem", () => {
  test("Remove the first element from an array of three items.", () => {
    const dummyArray = [
      { name: "Jelly", price: 3.5 },
      { name: "Mustard", price: 2.0 },
      { name: "Ranch", price: 2.5 },
    ];
    //not returning anything
    removeItem(dummyArray, 0);
    expect(dummyArray).toEqual([
      { name: "Mustard", price: 2.0 },
      { name: "Ranch", price: 2.5 },
    ]);
  });
  test("Remove the last element from an array of three items.", () => {
    const dummyArray = [
      { name: "Jelly", price: 3.5 },
      { name: "Mustard", price: 2.0 },
      { name: "Ranch", price: 2.5 },
    ];
    removeItem(dummyArray, 2);
    expect(dummyArray).toEqual([
      { name: "Jelly", price: 3.5 },
      { name: "Mustard", price: 2.0 },
    ]);
  });
  test("Remove the middle element from an array of three items.", () => {
    const dummyArray = [
      { name: "Jelly", price: 3.5 },
      { name: "Mustard", price: 2.0 },
      { name: "Ranch", price: 2.5 },
    ];
    removeItem(dummyArray, 1);
    expect(dummyArray).toEqual([
      { name: "Jelly", price: 3.5 },
      { name: "Ranch", price: 2.5 },
    ]);
  });
  test("Remove the only element from an array of one item.", () => {
    const dummyArray = [{ name: "Jelly", price: 3.5 }];
    removeItem(dummyArray, 0);
    expect(dummyArray).toEqual([]);
  });
});

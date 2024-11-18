const { addItem, removeItem, getItems, clearList } = require('../src/shoppingListManager');

beforeEach(() => {
  clearList(); // Ensure the list is empty before each test
});

test('addItem should add a valid item to the list', () => {
  expect(addItem('Milk')).toBe(true);
  expect(getItems()).toContain('Milk');
});

test('addItem should not add an invalid item', () => {
  expect(addItem('')).toBe(false);
  expect(addItem(123)).toBe(false);
  expect(addItem({})).toBe(false);
  expect(getItems()).toEqual([]);
});

test('addItem should trim whitespace from items', () => {
  expect(addItem('  Bread  ')).toBe(true);
  expect(getItems()).toContain('Bread');
});

test('removeItem should remove an item by index', () => {
  addItem('Eggs');
  expect(removeItem(0)).toBe(true);
  expect(getItems()).not.toContain('Eggs');
});

test('removeItem should not remove an item with an invalid index', () => {
  addItem('Apples');
  expect(removeItem(-1)).toBe(false);
  expect(removeItem(2)).toBe(false);
  expect(getItems()).toEqual(['Apples']);
});

test('getItems should return the current list of items', () => {
  addItem('Milk');
  addItem('Bananas');
  expect(getItems()).toEqual(['Milk', 'Bananas']);
});

test('clearList should empty the shopping list', () => {
  addItem('Oranges');
  clearList();
  expect(getItems()).toEqual([]);
});

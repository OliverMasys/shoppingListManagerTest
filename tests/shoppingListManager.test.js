
const { addItem, removeItem, getItems, clearList } =
require('../src/shoppingListManager');

beforeEach(() => {
    clearList(); // Reset test
});

test('addItem should add an item to the list', () => {
    addItem('Milk');
    expect(getItems()).toContain('Milk'); //List to contain Milk
});

test('removeItem should remove an item from the list', () => {
    addItem('Bread');
    removeItem(0);
    expect(getItems()).not.toContain('Bread'); // List that does not contain Bread after removal
});

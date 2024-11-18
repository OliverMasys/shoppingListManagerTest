// shoppingListManager.js
const shoppingList = [];
/**
 * 
 * @param {string} item 
 * @returns {boolean}
 */

function addItem(item) {
    if (typeof item === 'string' && item.trim()) {
        shoppingList.push(item.trim());
        return true;
    }
    return false;
}

/**
 * 
 * @param {number} index 
 * @returns {boolean}
 */

function removeItem(index) {
    if (index >= 0 && index < shoppingList.length) {
        shoppingList.splice(index, 1);
        return true;
    }
    return false;
}

/**
 * 
 * @returns {Array}
 */

function getItems() {
    return [...shoppingList];
}


/**
 * Clear all iteam in shopping list
 */
function clearList() {
    shoppingList.length = 0; //clear all item
}

module.exports = { addItem, removeItem, getItems, clearList };
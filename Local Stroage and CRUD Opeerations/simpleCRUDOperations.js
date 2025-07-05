let items = [];

// Create
function createItem(item) {
  items.push(item);
}

// Read
function readItems() {
  return items;
}

// Update
function updateItem(index, newItem) {
  items[index] = newItem;
}

// Delete
function deleteItem(index) {
  items.splice(index, 1);
}

// Example Usage
createItem('Book');
console.log(readItems()); // ['Book']
updateItem(0, 'Magazine');
console.log(readItems()); // ['Magazine']
deleteItem(0);
console.log(readItems()); // []
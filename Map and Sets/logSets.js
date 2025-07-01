const treeSet = new Set();

// Add items to the treeSet
treeSet.add('Baobab');
treeSet.add('Jackalberry');
treeSet.add('Mopane Tree');
treeSet.add('Breadfruit');
treeSet.add('Baobab'); //duplicate item will be ignored

console.log(treeSet);
// Set(4) {'Baobab', 'Jackalberry', 'Mopane Tree', 'Breadfruit'}
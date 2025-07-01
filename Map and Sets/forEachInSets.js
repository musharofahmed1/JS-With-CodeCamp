const treeSet = new Set();

// Add items to the treeSet
treeSet.add('Baobab');
treeSet.add('Jackalberry');
treeSet.add('Mopane Tree');
treeSet.add('Breadfruit');

treeSet.delete('Breadfruit');

treeSet.forEach((tree) => console.log(tree));

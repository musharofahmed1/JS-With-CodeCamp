const treeSet = new Set();


treeSet.add('Baobab');
treeSet.add('Jackalberry');
treeSet.add('Mopane Tree');
treeSet.add('Breadfruit');
treeSet.add('Baobab'); 
treeSet.delete('Breadfruit');
console.log(treeSet);
console.log(treeSet.has('Breadfruit')); 

console.log('Keys: ', treeSet.keys());
console.log('Values: ', treeSet.values());

const myTreesMap = new Map();
myTreesMap.set({ type: 'deciduous' }, 'Maple tree');
myTreesMap.set([1, 2], 'Pine tree');
myTreesMap.set(42, 'Oak tree');
myTreesMap.set(true, 'Birch tree');
myTreesMap.set(function() { return "I'm a function key"; }, 'Willow tree');

console.log(myTreesMap);
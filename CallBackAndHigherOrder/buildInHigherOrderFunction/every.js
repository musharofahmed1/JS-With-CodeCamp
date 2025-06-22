const scores = [54,56,78,98,67];
const result = scores.every(score => score >= 50); // 55 then false because condition did not match for a single element
console.log(result)
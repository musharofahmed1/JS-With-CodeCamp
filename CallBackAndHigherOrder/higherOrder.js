//Higher order functions can also return functions
function operateOnArray(arr,operation){  //operation is function
    let result = [];
    for (let i = 0; i < arr.length; i++) {
    result.push(operation(arr[i]));
    }
    return result;
}

function double(x) {
    return x * 2;
}

let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = operateOnArray(numbers, double);
console.log(doubledNumbers);
//map return the value

//makes double withOut map()
function doubleAll(number){
    let result = [];

    for(let i of number){
        result.push(i*2);
    }
    return result;
}
const num = [1,2,3];
console.log(doubleAll(num));

//makes double with map()

const numbers2 = [1,2,34,5];
const result = numbers2.map(num2 => num2 * 2);  //const sayHiStranger = () => 'Hi, stranger';
console.log(result);
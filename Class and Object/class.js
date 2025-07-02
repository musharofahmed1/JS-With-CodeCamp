const Dog = class {
  constructor(name) {
    this.name = name;
  }

  bark() {
    console.log(`${this.name} says woof!`);
  }
};;
const dog = new Dog("Gino");
console.log(dog.name);

//constractor
// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }
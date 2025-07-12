//https://www.freecodecamp.org/learn/full-stack-developer/lab-inventory-management-program/build-an-inventory-management-program

// Declare an empty inventory array
const inventory = [];

// Function to find the index of a product by name
function findProductIndex(productName) {
  const lowerName = productName.toLowerCase();
  return inventory.findIndex(product => product.name === lowerName);
  /* ✅ What it does:
  This line uses the .findIndex() method to search through the inventory array.
  It looks for the first object where the name matches the lowerName string you passed in.
  If it finds it — it returns the index (position number).
  If not — it returns -1.*/
}

//Function to add a product (object) to the inventory
function addProduct(product) {
  const lowerName = product.name.toLowerCase();
  const index = findProductIndex(lowerName);

  if (index !== -1) {
    // Product exists — update quantity
    inventory[index].quantity += product.quantity; 
    //This line updates the quantity of an existing product in the inventory.
    console.log(`${lowerName} quantity updated`);
  } else {
    // Product not found — add to inventory
    inventory.push({
      name: lowerName,
      quantity: product.quantity
    });
    console.log(`${lowerName} added to inventory`);
  }
}

// Function to remove quantity of a product
function removeProduct(productName, quantityToRemove) {
  const lowerName = productName.toLowerCase();
  const index = findProductIndex(lowerName);

  if (index === -1) {
    // Product not found
    console.log(`${lowerName} not found`);
  } else {
    const currentQuantity = inventory[index].quantity;

    if (currentQuantity < quantityToRemove) {
      // Not enough stock
      console.log(`Not enough ${lowerName} available, remaining pieces: ${currentQuantity}`);
    } else {
      // Subtract quantity
      inventory[index].quantity -= quantityToRemove;

      if (inventory[index].quantity === 0) {
        // Remove product if quantity is zero
        inventory.splice(index, 1);
      } else {
        // Log remaining quantity
        console.log(`Remaining ${lowerName} pieces: ${inventory[index].quantity}`);
      }
    }
  }
}

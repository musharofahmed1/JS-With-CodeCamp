// ✅ Declare an empty inventory array
// This array will store product objects with two keys: 
// - name: a lowercase string
// - quantity: an integer
const inventory = [];

// ✅ Function to find the index of a product by its name
function findProductIndex(productName) {
  // Convert the input productName to lowercase to ensure case-insensitive matching
  const lowerName = productName.toLowerCase();

  // Use .findIndex() to search through the inventory array for a product 
  // whose 'name' property matches 'lowerName'
  // - If found, returns the index (position) of that product
  // - If not found, returns -1
  return inventory.findIndex(product => product.name === lowerName);

  /*
  📌 How it works:
  - Loops over each product in the inventory array
  - Compares product.name with the lowerName
  - Stops and returns the index of the first match
  - If no match, it returns -1
  */
}

// ✅ Function to add a product (object) to the inventory
function addProduct(product) {
  // Convert the product's name to lowercase for consistent storage and comparison
  const lowerName = product.name.toLowerCase();

  // Find the index of the product in the inventory, if it already exists
  const index = findProductIndex(lowerName);

  // Check if the product already exists in inventory
  if (index !== -1) {
    // ✅ If product exists — update its quantity by adding the new quantity
    inventory[index].quantity += product.quantity;

    /*
    📌 What happens here:
    - Access the product at 'index' inside inventory
    - Increase its quantity by product.quantity
    */

    // Log that the product quantity has been updated
    console.log(`${lowerName} quantity updated`);
  } else {
    // ✅ If product not found — add the new product object to inventory
    inventory.push({
      name: lowerName,        // Store product name in lowercase
      quantity: product.quantity  // Store the quantity
    });

    // Log that the product was added to inventory
    console.log(`${lowerName} added to inventory`);
  }
}

// ✅ Function to remove a quantity of a product from inventory
function removeProduct(productName, quantityToRemove) {
  // Convert the product name to lowercase for consistent searching
  const lowerName = productName.toLowerCase();

  // Find the index of the product in the inventory
  const index = findProductIndex(lowerName);

  // ✅ If product not found — log an appropriate message
  if (index === -1) {
    console.log(`${lowerName} not found`);
  } else {
    // ✅ Product exists — get its current quantity
    const currentQuantity = inventory[index].quantity;

    // ✅ If there's not enough stock to remove the requested quantity
    if (currentQuantity < quantityToRemove) {
      console.log(`Not enough ${lowerName} available, remaining pieces: ${currentQuantity}`);
    } else {
      // ✅ Subtract the requested quantity from the product's quantity
      inventory[index].quantity -= quantityToRemove;

      // ✅ If quantity becomes zero after subtraction — remove the product object from inventory
      if (inventory[index].quantity === 0) {
        inventory.splice(index, 1);  // Remove one item at 'index' position
      } else {
        // ✅ If some stock remains, log how many pieces are left
        console.log(`Remaining ${lowerName} pieces: ${inventory[index].quantity}`);
      }
    }
  }
}

/*
📌 Summary of how this inventory system works:
- inventory is an array of objects like: { name: "flour", quantity: 10 }
- findProductIndex() finds where a product is inside inventory (or returns -1 if not found)
- addProduct() either adds a new product or increases the quantity if it already exists
- removeProduct() subtracts quantity, removes product if quantity hits zero, 
  or warns if stock is too low or product not found
- All names are handled in lowercase to avoid case-sensitivity issues
*/

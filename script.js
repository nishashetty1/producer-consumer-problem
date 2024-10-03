let inventory = {}; // Simulating a central inventory database

document.getElementById('updateInventory').addEventListener('click', () => {
    const productId = document.getElementById('supplierProduct').value;
    const quantity = parseInt(document.getElementById('supplierQuantity').value);

    if (productId && quantity) {
        updateInventory(productId, quantity);
        displayInventory();
    }
});

document.getElementById('processOrder').addEventListener('click', () => {
    const productId = document.getElementById('orderProduct').value;
    const quantity = parseInt(document.getElementById('orderQuantity').value);

    if (productId && quantity) {
        processOrder(productId, quantity);
        displayInventory();
    }
});

function updateInventory(productId, quantity) {
    // Simulating a lock for synchronization
    if (!inventory[productId]) {
        inventory[productId] = 0;
    }
    inventory[productId] += quantity;
    alert(`Updated inventory: ${productId} + ${quantity}`);
}

function processOrder(productId, quantity) {
    if (inventory[productId] >= quantity) {
        inventory[productId] -= quantity;
        alert(`Processed order: ${productId} - ${quantity}`);
    } else {
        alert('Insufficient stock for order!');
    }
}

function displayInventory() {
    document.getElementById('inventoryStatus').innerText = JSON.stringify(inventory, null, 2);
}

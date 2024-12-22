# Warehouse Inventory System - Producer Consumer Problem 

This is a simple web-based Warehouse Inventory System made using AI that allows suppliers to update product quantities and for orders to be processed based on current stock levels. The system simulates inventory management where suppliers can add stock, and orders can be placed by users or clients. The current inventory status is displayed and updated in real-time.

## Features

- **Supplier Update**: Suppliers can update the inventory by adding stock for products.
- **Order Processing**: Orders are processed by checking if sufficient stock is available for a given product.
- **Real-time Inventory Status**: The system displays the current inventory status, showing the quantity of each product.

## How to Use

### 1. Supplier Update:
   - Enter the **Product ID** (e.g., P123) and the **Quantity** of stock to add.
   - Click the **Update Inventory** button to add the stock to the warehouse inventory.

### 2. Order Processing:
   - Enter the **Product ID** (e.g., P123) and the **Quantity** of stock to be ordered.
   - Click the **Process Order** button to subtract the ordered quantity from the inventory.
   - If there's insufficient stock, an alert will notify you.

### 3. View Inventory Status:
   - The current inventory status is displayed below the order section, showing the **Product ID** and its corresponding **Quantity**.

## Example Workflow

1. **Supplier adds inventory**:
   - Product ID: P123, Quantity: 100
   - Result: The inventory for Product P123 will now show 100 units.

2. **Order is processed**:
   - Product ID: P123, Quantity: 50
   - Result: The inventory for Product P123 will decrease by 50, leaving 50 units.

import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // Adds an item to the cart or increases its quantity if already in the cart
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++; // Increment quantity if item already exists
      } else {
        state.items.push({ name, image, cost, quantity: 1 }); // Add new item with quantity 1
      }
    },

    // Removes an item from the cart by its name
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload); // Remove item by name
    },

    // Updates the quantity of an item in the cart
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name); // Find item to update
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity; // Update its quantity
      }
    },
  },
});

// Export the action creators for use in components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export the reducer as default to use in store.js
export default CartSlice.reducer;

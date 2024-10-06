// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // Adjust the path as necessary

// Configure the store
const store = configureStore({
  reducer: {
    cart: cartReducer, // Associating the cart reducer with the 'cart' key
    // Add other reducers here as needed
  },
});
// Export the configured store
export default store;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity, addItem } from './redux/actions'; // Ensure all actions are defined properly
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.items); // Get items from Redux store
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let totalCost = 0;
        cart.forEach((item) => {
        const itemTotal = item.quantity * item.cost.replace('$', ''); // Remove $ and calculate
        otalCost += itemTotal;
    });
    return totalCost;
  };

  // Increment the quantity of an item
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  // Decrement the quantity of an item
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
}
};

  // Remove an item from the cart
  const handleRemove = (item) => {
    dispatch(removeItem(item.name)); // Dispatch removeItem action
  };

return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-details">
                <h4>{item.name}</h4>
                <p>{item.cost}</p>
                <div className="cart-controls">
                  <button onClick={() => handleDecrement(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrement(item)}>+</button>
                </div>
                <button onClick={() => handleRemove(item)}>Remove</button>
            </div>
            </div>
          ))}
        <div className="cart-total">
            <h3>Total: ${calculateTotalAmount()}</h3>
          </div>
          <button onClick={onContinueShopping}>Continue Shopping</button>
          <button onClick={handleCheckoutShopping}>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartItem;

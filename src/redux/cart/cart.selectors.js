import { createSelector } from 'reselect';

const selectCart = state => state.cart;

// this is a memoized selecto


export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => 
  cartItems.reduce((accum, cartItem) => accum + cartItem.quantity, 
    0)

)
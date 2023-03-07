export const initialState = {
  loggedUser: {},
  cart: [],
  price: { subtotal: 0, tax: 0, delivery: 0, total: 0 },
  popup: { isOpen: false, message: "" },
};
// Manage Pricing
const newPrice = (cart) => {
  const subtotal = cart.reduce(
    (currentSubtotal, product) =>
      product.price * product.quantity + currentSubtotal,
    0
  );
  const tax = subtotal * 0.1;
  const delivery = subtotal >= 100 ? 0 : subtotal === 0 ? 0 : 5;
  const total = subtotal + tax + delivery;
  const newPrice = {
    subtotal: subtotal.toFixed(2),
    tax: tax.toFixed(2),
    delivery: delivery.toFixed(2),
    total: total.toFixed(2),
  };
  return newPrice;
};

// Reducer
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_LOGGED_USER":
      const newUser = {
        name: action.user.displayName,
        email: action.user.email,
      };
      const loggedPopup = { isOpen: true, message: `Welcome ${newUser.name}` };
      return { ...state, loggedUser: newUser, popup: loggedPopup };

    case "REMOVE_LOGGED_USER":
      const logoutPopup = { isOpen: true, message: "Logout Successful !" };
      return { ...state, loggedUser: {}, popup: logoutPopup };

    case "ADD_TO_CART":
      const addedProduct = action.product;
      const newCart = [...state.cart];
      const cartProduct = newCart.find(
        (product) => product.id === addedProduct.id
      );
      if (cartProduct) {
        cartProduct.quantity = cartProduct.quantity + 1;
      } else {
        addedProduct.quantity = 1;
      }
      const addedCart = cartProduct ? newCart : [...state.cart, addedProduct];
      const addedPrice = newPrice(addedCart);
      return { ...state, cart: addedCart, price: addedPrice };

    case "REMOVE_FROM_CART":
      const removedCart = state.cart.filter(
        (product) => product.id !== action.product.id
      );
      const removedPrice = newPrice(removedCart);
      return { ...state, cart: removedCart, price: removedPrice };

    case "DECREASE_QUANTITY":
      const decreasedCart = [...state.cart];
      const decreasedProduct = decreasedCart.find(
        (product) => product.id === action.product.id
      );
      if (decreasedProduct.quantity > 0) {
        decreasedProduct.quantity = action.product.quantity - 1;
      }
      const decreasedPrice = newPrice(decreasedCart);
      return { ...state, cart: decreasedCart, price: decreasedPrice };

    case "CLEAN_CART":
      const cleanedPrice = { subtotal: 0, tax: 0, delivery: 0, total: 0 };
      const payPopup = { isOpen: true, message: "Payment Successful !" };
      return { ...state, cart: [], price: cleanedPrice, popup: payPopup };

    case "OPEN_POPUP":
      const openedPopup = { isOpen: true, message: action.message };
      return { ...state, popup: openedPopup };

    case "CLOSE_POPUP":
      const closedPopup = { isOpen: false, message: "" };
      return { ...state, popup: closedPopup };

    default:
      return state;
  }
};

export default reducer;

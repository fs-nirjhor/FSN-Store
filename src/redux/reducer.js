export const initialState = {
  loggedUser: {},
  cart: [],
  price: {subtotal:0, tax:0, delivery:0, total:0},
};

const newPrice = (cart) => {
  const subtotal = cart.reduce(
    (currentSubtotal, product) =>
      product.price * product.quantity + currentSubtotal,
    0
  );
  const tax = subtotal * 0.1;
  const delivery = subtotal >= 100 ? 0 
  							: subtotal === 0 ? 0 
  							: 5 ;
  const total = subtotal + tax + delivery;
  const newPrice = {
    subtotal: subtotal.toFixed(2),
    tax: tax.toFixed(2),
    delivery: delivery.toFixed(2),
    total: total.toFixed(2),
  };
  return newPrice;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_LOGGED_USER":
      const newUser = {
        name: action.user.displayName,
        email: action.user.email,
      };
      return { ...state, loggedUser: newUser };
      
    case 'REMOVE_LOGGED_USER':
    	const removedUser = {} ;
      return {...state, loggedUser: removedUser};

    case "ADD_TO_CART":
      const addedProduct = action.product;
      const newCart = [...state.cart];
      const cartProduct = newCart.find(
        (product) => product.id === addedProduct.id
      );
      if (cartProduct) {
        cartProduct.quantity = addedProduct.quantity + 1;
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

    case "INCREASE_QUANTITY":
      const increasedCart = [...state.cart];
      const increasedProduct = increasedCart.find(
        (product) => product.id === action.product.id
      );
      increasedProduct.quantity = action.product.quantity + 1;
      const increasedPrice = newPrice(increasedCart);
      return { ...state, cart: increasedCart, price: increasedPrice };

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

    default:
      return state;
  }
};

export default reducer;

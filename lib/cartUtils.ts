import { Carts, CartItem } from '../types/carts';

const CART_KEY = 'cart';

export function getCart(): Carts {
  const cart = localStorage.getItem(CART_KEY);
  if (cart) {
    return JSON.parse(cart);
  }
  return { items: [] };
}

export function saveCart(cart: Carts): void {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function addToCart(CartItem: CartItem): void {
  const cart = getCart();
  const existingItemIndex = cart.items.findIndex(i => i.packageId === CartItem.packageId);

  if (existingItemIndex !== -1) {
    cart.items[existingItemIndex].quantity += CartItem.quantity;
  } else {
    cart.items.push(CartItem);
  }

  saveCart(cart);
}

export function removeFromCart(packageId: string): void {
  const cart = getCart();
  cart.items = cart.items.filter(item => item.packageId !== packageId);
  saveCart(cart);
}
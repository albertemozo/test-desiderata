import { expect, it } from "vitest";
import { ShoppingCart } from "./shoppingCart";

const cart = new ShoppingCart();

it("adds items to the cart", () => {
  cart.addItem("apple", 1);
  cart.addItem("banana", 1);
  expect(cart.getTotal()).toBe(2);
})

it("removes items from the cart", () => {
  cart.removeItem("apple");
  expect(cart.getTotal()).toBe(1);
});
import { expect, it } from "vitest";
import { ShoppingCart } from "./shoppingCart";

const cart = new ShoppingCart();

it("adds items to the cart", () => {
  cart.addItem("apple", 10);
  cart.addItem("banana", 10);
  expect(cart.getTotal()).toBe(20);
})

it("removes items from the cart", () => {
  cart.removeItem("apple");
  expect(cart.getTotal()).toBe(10);
});
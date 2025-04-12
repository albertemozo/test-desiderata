import {expect, it} from "vitest";
import {Price} from "./price";

it("calculates amount after tax", () => {
    const price = new Price(100, "EUR", 21);
    expect(price.amountAfterTax()).toBe(121);
});
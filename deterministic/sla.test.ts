import { expect, it } from "vitest";
import { SLA } from "./sla";

it("calculates the deadline", () => {
    const expectedDeadline = new Date();
    expectedDeadline.setHours(expectedDeadline.getHours() + 24);

    const sla = new SLA();
    expect(sla.deadline("basic", "normal")).toBe(expectedDeadline.toISOString());
});
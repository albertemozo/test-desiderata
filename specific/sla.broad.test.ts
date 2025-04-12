import { expect, it } from "vitest";
import { SLA } from "./sla";

it("calculates SLA depending on context", () => {
    const slaCalculator = new SLA();
    expect(slaCalculator.responseTime("premium", "critical", true)).toBe(6);
});
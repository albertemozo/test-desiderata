import { expect, it } from "vitest";
import { SLA } from "./sla";

it("calculates default SLA", () => {
    const slaCalculator = new SLA();
    expect(slaCalculator.responseTime("basic", "normal", false)).toBe(24);
});

it("reduces SLA for critical issues", () => {
    const slaCalculator = new SLA();
    expect(slaCalculator.responseTime("basic", "critical", false)).toBe(4);
});

it("halves SLA for premium plan", () => {
    const slaCalculator = new SLA();
    expect(slaCalculator.responseTime("premium", "normal", false)).toBe(12);
});

it("increases SLA by 4 hours on weekends", () => {
    const slaCalculator = new SLA();
    expect(slaCalculator.responseTime("basic", "normal", true)).toBe(28);
});

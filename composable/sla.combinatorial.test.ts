import { expect, it } from "vitest";
import { SLA } from "./sla";

it("calculates SLA for basic plan with normal severity on weekdays", () => {
    const slaCalculator = new SLA();
    expect(slaCalculator.responseTime("basic", "normal", false)).toBe(24);
});

it("calculates SLA for premium plan with normal severity on weekdays", () => {
    const slaCalculator = new SLA();
    expect(slaCalculator.responseTime("premium", "normal", false)).toBe(12);
});

it("calculates SLA for basic plan with normal severity on weekends", () => {
    const slaCalculator = new SLA();
    expect(slaCalculator.responseTime("basic", "normal", true)).toBe(28);
});

it("calculates SLA for premium plan with normal severity on weekends", () => {
    const slaCalculator = new SLA();
    expect(slaCalculator.responseTime("premium", "normal", true)).toBe(16);
});

it("calculates SLA for basic plan with critical severity on weekdays", () => {
    const slaCalculator = new SLA();
    expect(slaCalculator.responseTime("basic", "critical", false)).toBe(4);
});

it("calculates SLA for premium plan with critical severity on weekdays", () => {
    const slaCalculator = new SLA();
    expect(slaCalculator.responseTime("premium", "critical", false)).toBe(2);
});

it("calculates SLA for basic plan with critical severity on weekends", () => {
    const slaCalculator = new SLA();
    expect(slaCalculator.responseTime("basic", "critical", true)).toBe(8);
});

it("calculates SLA for premium plan with critical severity on weekends", () => {
    const slaCalculator = new SLA();
    expect(slaCalculator.responseTime("premium", "critical", true)).toBe(6);
});
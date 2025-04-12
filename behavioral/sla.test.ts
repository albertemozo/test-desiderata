import { expect, it, vi } from "vitest";
import { SLA } from "./sla";
import { FastLogger } from "./logger";

it("calculates default SLA", () => {
    const logger = new FastLogger();
    const loggerSpy = vi.spyOn(logger, "log");
    const slaCalculator = new SLA(logger);

    slaCalculator.responseTime("basic", "normal", false);

    expect(loggerSpy).toHaveBeenCalledWith("Calculated response time: 24 hours");
});

it("reduces SLA for critical issues", () => {
    const logger = new FastLogger();
    const loggerSpy = vi.spyOn(logger, "log");
    const slaCalculator = new SLA(logger);

    slaCalculator.responseTime("basic", "critical", false);

    expect(loggerSpy).toHaveBeenCalledWith("Calculated response time: 4 hours");
});

it("halves SLA for premium plan", () => {
    const logger = new FastLogger();
    const loggerSpy = vi.spyOn(logger, "log");
    const slaCalculator = new SLA(logger);

    slaCalculator.responseTime("premium", "normal", false);

    expect(loggerSpy).toHaveBeenCalledWith("Calculated response time: 12 hours");
});


it("increases SLA by 4 hours on weekends", () => {
    const logger = new FastLogger();
    const loggerSpy = vi.spyOn(logger, "log");
    const slaCalculator = new SLA(logger);

    slaCalculator.responseTime("basic", "normal", true);

    expect(loggerSpy).toHaveBeenCalledWith("Calculated response time: 28 hours");
});

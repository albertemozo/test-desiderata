import { expect, it } from "vitest";
import { SLA } from "./sla";
import {SlowLogger} from "./logger";

it("calculates default SLA", () => {
    const slaCalculator = new SLA(new SlowLogger());
    expect(slaCalculator.responseTime("basic", "normal", false)).toBe(24);
}, 20000);

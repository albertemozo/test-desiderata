import { expect, it } from "vitest";
import { SLA } from "./sla";
import {Client} from "./client";

it("calculates premium SLA", () => {
    const client = new Client(
        1,
        "John",
        "Doe",
        "john.doe@example.com",
        "123-456-7890",
        "123 Main St",
        "Anytown",
        "Anystate",
        "12345",
        "USA",
        new Date(1990, 0, 1),
        "male",
        "Engineer",
        "Tech Corp",
        ["reading", "gaming"],
        new Date(),
        new Date(),
        true,
        100,
        "premium",
        "English",
        "email"
    );

    const slaCalculator = new SLA();
    expect(slaCalculator.responseTime(client, "normal", false)).toBe(12);
});

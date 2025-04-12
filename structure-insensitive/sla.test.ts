import { expect, it, vi } from "vitest";
import { SLA } from "./sla";
import {ClientRepository} from "./clientRepository";

it("calculates premium SLA", () => {
    const clientRepository = new ClientRepository();
    const clientFindSpy = vi.spyOn(clientRepository, "find");
    const slaCalculator = new SLA(clientRepository);

    const result = slaCalculator.responseTime(1, "normal", false);

    expect(clientFindSpy).toHaveBeenCalledTimes(2);
    expect(result).toBe(12);
});

import {Logger} from "./logger";

export class SLA {
    constructor(private logger: Logger) {}

    responseTime(plan: string, severity: string, weekend: boolean): number {
        let result = 24;

        if (severity === "critical") {
            result = 4;
        }

        if (plan === "premium") {
            result = result / 2;
        }

        if (weekend) {
            result = result + 4;
        }

        this.logger.log(`Calculated response time: ${result} hours`);

        return result;
    }
}
import {Client} from "./client";

export class SLA {
    responseTime(client: Client, severity: string, weekend: boolean): number {
        let result = 24;

        if (severity === "critical") {
            result = 4;
        }

        if (client.plan === "premium") {
            result = result / 2;
        }

        if (weekend) {
            result = result + 4;
        }

        return result;
    }
}
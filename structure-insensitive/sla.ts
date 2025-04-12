import {Client} from "./client";
import {ClientRepository} from "./clientRepository";

export class SLA {
    constructor(private clientRepository: ClientRepository) {}

    responseTime(clientId: number, severity: string, weekend: boolean): number {
        if (!this.clientRepository.find(clientId)) {
            throw new Error("Client not found");
        }

        let result = 24;

        if (severity === "critical") {
            result = 4;
        }

        if (this.clientRepository.find(clientId).plan === "premium") {
            result = result / 2;
        }

        if (weekend) {
            result = result + 4;
        }

        return result;
    }
}
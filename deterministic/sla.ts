export class SLA {
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

        return result;
    }

    deadline(plan: string, severity: string): string {
        const now = new Date();
        const responseTime = this.responseTime(plan, severity, this.isWeekend(now));

        let deadline = new Date(now);
        deadline.setHours(deadline.getHours() + responseTime);

        return deadline.toISOString();
    }

    private isWeekend(date: Date) {
        const day = date.getDay();
        return day === 0 || day === 6; // 0 = Sunday, 6 = Saturday
    }
}